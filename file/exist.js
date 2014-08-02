/**
 * Created by peter on 14-8-2.
 */

//   callback  return false or true
var fs=require("fs");

fs.exists("dir/ssd.txt",function(exists){
    console.log(exists);
});