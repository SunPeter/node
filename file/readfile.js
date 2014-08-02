/**
 * Created by peter on 14-8-2.
 */
//fs.readFile(filename, [options], callback)
/*
filename String
options Object
encoding String | Null default = null
flag String default = 'r'
callback Function
*/

var fs=require("fs");

fs.readFile("test/file1.txt","utf8",function(err,data){
    if(!err){
        console.log(data);
    }
});