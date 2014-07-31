/**
 * Created by peter on 14-7-31.
 */
var fs=require("fs");
fs.unlink("test/link.js",function(err){
    if(!err){
        console.log("done");
    }
    else{
        console.error("err");
    }
});