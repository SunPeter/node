/**
 * Created by peter on 14-8-10.
 */
var http=require("http");
var option={
    hostname:"localhost",
    port:8080,
    path:"/ssd",
    method:"get"
}
var req=http.request(option,function(res){
    console.log(res.statusCode);
    console.log(res.headers);
});

req.end();