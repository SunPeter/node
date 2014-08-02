/**
 * Created by peter on 14-8-2.
 */
var fs=require("fs");

fs.stat("stat.js",function(err,stats){
    if(!err){
        console.log(stats);
    }
    else{
        console.log(err);
    }
});