/**
 * Created by peter on 14-8-2.
 */
//fs.write(fd, buffer, offset, length, position, callback)
//The callback will be given three arguments (err, written, buffer) where written specifies how many bytes were written from buffer.

var buf=new Buffer("hello world");
var fs=require("fs");

fs.open("dir/write.txt","a+",function(err,fd){
    if(!err){
        fs.write(fd,buf,0,buf.length,0,function(err, written, buffer){
            if(!err){
                console.log(written);
                console.log(buffer);
            }
        });
    }
})