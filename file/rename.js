/**
 * Created by peter on 14-7-31.
 */
var fs=require("fs");

fs.rename("test/file.txt","test/filerame.txt",function(){
    console.log("done");
});

fs.renameSync("test/filerame.txt","test/file.txt");