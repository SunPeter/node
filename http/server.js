/**
 * Created by Administrator on 14-6-30.
 */
var http=require("http");
var router=require("./router");
var url=require("url");
module.exports=function(){
    http.createServer(function(req,res){
        res.writeHead(200,{
            "Content-Type":"text/html",
            "Cache-Control": "no-cache",
            "Server":"nodejs"
        });
        var pathname=url.parse(req.url).pathname;
        router(pathname,req,res);
        res.end();
    }).listen(8080);
    console.log("server listen 8080 port");
}