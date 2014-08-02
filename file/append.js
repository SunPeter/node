/**
 * Created by peter on 14-8-2.
 */
//fs.appendFile(filename, data, [options], callback)

var fs=require("fs");

fs.appendFile("dir/ssd.txt","SSD",function(err){
    if(!err){
        console.log("done");
    }
});