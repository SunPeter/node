/**
 * Created by peter on 14-8-2.
 */
var fs=require("fs");

fs.mkdir("dir",function(err){
    if(!err){
        console.log("done");
    }
})