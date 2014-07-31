/**
 * Created by peter on 14-7-31.
 */
var uid=process.getuid(),
    gid=process.getgid();
var fs=require("fs");
fs.chown("file.txt",uid,gid,function(){
    console.log("done");
});