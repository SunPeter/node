var fs=require("fs");

fs.readdir("dir",function(err,files){
    if(!err){
        console.log(files);
    }
});