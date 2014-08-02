/**
 * Created by peter on 14-8-2.
 */
//fs.read(fd, buffer, offset, length, position, callback)

var fs=require("fs");
fs.open("dir/write.txt","r",function(err,fd){
    if(!err){
        fs.stat(fd,function(err,stats){
            if(!err){
                var len=stats.size;
                var buf=new Buffer(size);
                fs.read(fd,buf,0,size,0,function(err, bytesRead, buffer){
                    if(!err){
                        console.log(bytesRead);
                    }
                });
            }
            else{
                console.log(err);
            }
        })

    }
    fs.close();
})