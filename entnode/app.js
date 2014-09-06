/**
 * Created by peter on 14-8-12.
 */
var http=require("http"),
    url=require("url"),
    path=require("path"),
    fs=require("fs"),
    os=require("os");

var mime=require("./lib/mime"),
    config=require("./lib/config");
var port=8080;

var server=http.createServer(function(req,res){
    /**
     * 路由
     * 设置静态文件目录
     *
     */
    var url=req.url;
    var realpath=path.join("assets",url);
//    console.log(realpath);
    var filetype=path.extname(url).slice(1);
//    console.log(realpath);
    var contentType=mime[filetype];
    fs.exists(realpath,function(exists){
        if(!exists){
            res.writeHead(404,{
                "Content-Type":"text/plain"
            });
            res.end("404 not found");
        }
        else{
            fs.stat(realpath,function(err,stat){
                var lastModified=stat.mtime.toUTCString();
                res.setHeader("Last-Modified",lastModified);
                if(err){
                    res.writeHead(500,{
                        "Content-Type":contentType
                    });
                    res.end(err);
                }
                else{
                    /*
                     gzip
                     */
                    var acceptEncoding = req.headers['accept-encoding'] || "";
                    console.log(acceptEncoding);
                    /*
                    cache
                     */
                    if(filetype.match(config.fileMatch)){
                        var date=new Date();
                        var expires=date.getTime()+config.maxAge;
                        date.setTime(expires);
                        res.setHeader("Cache-Control","max-age="+config.maxAge);
                        res.setHeader("Expires",date.toUTCString());
                    }

                    /*
                    not modefied
                     */

                    var ifModifiedSince = "If-Modified-Since".toLowerCase();

                    if(req.headers[ifModifiedSince] && lastModified == req.headers[ifModifiedSince]) {
                        res.writeHead(304, "Not Modified");
                        res.end();
                    }
                    else{
                        fs.readFile(realpath,function(err,data){
                            if(err){
                                res.writeHead(500,{
                                    "Content-Type":"text/plain"
                                });
                                res.end("500 server error");
                            }
                            else{
                                res.writeHead(200,{"Content-Type":contentType});
                                res.end(data,"utf8");
                            }
                        });
                    }
                }
            });
        }
    })
}).listen(port);
var ip=os.networkInterfaces().en0[1].address;
console.log("entnode server has started at"+ip+":"+port);


