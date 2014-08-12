/**
 * Created by peter on 14-8-12.
 */
var path=require("path");

var realpath="/Users/peter/github/node/url";
path.exists(realpath,function(exist){
    if(!exist){
        console.log("404");
    }
    else{
        console.log("exists!")
    }
});