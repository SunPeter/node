var fs=require("fs");
var http=require("http");



http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("hello world");
}).listen(8000);
fs.readdir("http:\\172.19.103.86\\ent\\",function  (err,files) {
	if(!err){
		console.log(files);
	}
	else{
		console.log(err);
	}
})