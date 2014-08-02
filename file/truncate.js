/**
 * Created by peter on 14-6-12.
 */
//file1:qwertyuiopsdfghjklzxcvbnm
//改变文件大小  截断

//fs.ftruncate(fd, len, callback)

//fs.truncate(path, len, callback)

var fs=require("fs");

fs.truncate("test/file1.txt","20",function(){
    console.log("done");
});
