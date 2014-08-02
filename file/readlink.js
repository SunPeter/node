/**
 * Created by peter on 14-8-1.
 */
var fs=require("fs");

fs.readlink("test/filelink.txt",function(err,linkstring){
    if(!err){
        console.log(linkstring);
    }
    else{
        console.log(err);
    }
});