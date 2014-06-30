/**
 * Created by peter on 14-6-12.
 */
var fs=require("fs");
var path=require("path");

fs.truncate("ssd","20",function(){

});
fs.stat("ssd.txt",function(err,data){
    var stat=data;
    console.log(stat);
});