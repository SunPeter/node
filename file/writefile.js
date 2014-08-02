/**
 * Created by peter on 14-8-2.
 */
//fs.writeFile(filename, data, [options], callback)#
/*
filename String
data String | Buffer
options Object
encoding String | Null default = 'utf8'
mode Number default = 438 (aka 0666 in Octal)
flag String default = 'w'
callback Function
*/

var fs=require("fs");
var data=null;
process.stdin.on('data', function (chunk) {
    fs.writeFile("dir/ssd.txt",chunk,function(err){
        if(!err){
            console.log("done");
        }
    });
});
