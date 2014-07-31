/**
 * Created by Administrator on 14-6-30.
 */
var fs=require("fs");
var querystring=require("querystring");
module.exports=function(pathname,req,res){
    console.log("req method:"+req.method);
    if(pathname=="/favicon.ico"){
        return;
    }
    if(pathname=="/ssd"){
        res.write(renderPage());
        return;
    }
    if(pathname=="/saw"){
        res.write("saw");
        return;
    }
    if(pathname=="/upload"&&req.method.toLowerCase()=="post"){
        var data="";
        req.setEncoding("utf8");
        req.addListener("data",function(trunk){
            data+=trunk;
            console.log("trunk:"+trunk);
        });
        req.addListener("end",function(){

            console.log("data:"+querystring.parse(data).text);
        });

        return;
    }
    else{
        console.log("asdsaaa");
        res.write("404 not found!");
    }
}

function renderPage(){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    return body;
}
function sleep(milesSecond){
    var t1=new Date().getTime();
    console.log(t1);
    while(new Date().getTime()<t1+milesSecond){

    }
}