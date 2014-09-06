/**
 * Created by peter on 14-8-23.
 */
var fs=require("fs");
var zlib=require("zlib");

var readable=fs.createReadStream("src/demo.txt");


var z = zlib.createGzip();



var writeable=fs.createWriteStream("dest/demo.txt");


//readable.pipe(z).pipe(writeable);
readable.pipe(writeable);




