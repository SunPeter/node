var filename="ssd";
var crypto=require("crypto");
var fs=require("fs");


var shasum=crypto.createHash("sha1");

filename=shasum.update(filename,"utf8").digest("hex");

console.log(filename);