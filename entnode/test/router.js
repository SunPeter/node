/**
 * Created by peter on 14-8-17.
 */
var url=require("url"),
    http=require("http");

http.createServer(function(req,res){
    var path=req.url;
//    console.log(path.parse(req.url).pathname);
    res.writeHead(200,{"COntent-Type":"text/plain"});
    res.end("ssd");
}).listen(8080);