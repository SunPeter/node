/**
 * Created by peter on 14-7-31.
 */
var fs=require("fs");
fs.link("test/file.txt","test/filelink.txt",function(err){
    if(!err){
        console.log("done");
    }
    else{
        console.error("err");
    }
});

//unlink