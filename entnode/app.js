/**
 * Created by peter on 14-8-12.
 */
var http=require("http"),
    url=require("url"),
    path=require("path"),
    fs=require("fs"),
    os=require("os");
var port=8080;
var server=http.createServer(function(req,res){
    var url=req.url;
    var realpath="assets"+url;
    console.log(realpath);
    path.exists(realpath,function(exists){
        if(!exists){
            res.writeHead(404,{
                "Content-Type":"text/plain"
            });
            res.end("404 not found");
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
                    res.writeHead(200,{
                        "Content-Type":"text/plain"
                    });
                    res.write(data,"utf8");
                    res.end();
                }
            });
        }
    })
}).listen(port);

var ip=os.networkInterfaces().en0[1].address;
console.log("entnode server has started at"+ip+":"+port);