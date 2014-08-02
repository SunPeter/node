/**
 * Created by peter on 14-8-2.
 */
//fs.open(path, flags, [mode], callback)
/*
 'r' - Open file for reading. An exception occurs if the file does not exist.
'r+' - Open file for reading and writing. An exception occurs if the file does not exist.
'rs' - Open file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache.
    This is primarily useful for opening files on NFS mounts as it allows you to skip the potentially stale local cache. It has a very real impact on I/O performance so don't use this flag unless you need it.

Note that this doesn't turn fs.open() into a synchronous blocking call. If that's what you want then you should be using fs.openSync()

'rs+' - Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
'wx' - Like 'w' but fails if path exists.
'w+' - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
'wx+' - Like 'w+' but fails if path exists.
'a' - Open file for appending. The file is created if it does not exist.
'ax' - Like 'a' but fails if path exists.
'a+' - Open file for reading and appending. The file is created if it does not exist.
'ax+' - Like 'a+' but fails if path exists.
*/

var fs=require("fs");

fs.open("test/file.txt","r",function(err,fd){
    if(!err){
        console.log(fd);
    }
    fs.close(fd,function(err){
        if(!err){
            console.log("close");
        }
    });
});