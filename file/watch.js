/**
 * Created by peter on 14-8-2.
 */
//fs.watch(filename, [options], [listener])

var fs=require("fs");

fs.watch("dir/ssd.txt",function(event,filename){
    console.log(event+":"+filename);
    if(!filename){
        console.log(filename);
    }
});