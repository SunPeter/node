/**
 * Created by peter on 14-8-23.
 */
var fs=require("fs");

/**
 * stream都是基于事件
 */
var readable=fs.createReadStream("src/demo.txt");
//默认返回buffer
//故此处建议设置编码
//readable.setEncoding("utf8");

readable.on("readable",function(){
    console.log(readable.read(2));
    console.log("readable");
});

readable.on('end', function() {
    console.log('there will be no more data.');
});

readable.on("close",function(){
    console.log("close");
});

readable.on("data",function(chunk){
    console.log(chunk);
//    console.log(chunk.length);
});



