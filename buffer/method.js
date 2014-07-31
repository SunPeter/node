/**
 * Created by peter on 14-7-31.
 */
var buf=new Buffer("asdfghj");

console.log("length:"+buf.length+"\n");

//buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
var bufCopy=new Buffer(7);
buf.copy(bufCopy,0,0);
console.log("copy:"+bufCopy.toString()+"\n");

//buf.slice([start], [end])
var bufCopy=buf.slice(0,4);
console.log("slice:"+bufCopy+"\n");

//buf.fill(value, [offset], [end])
var bufCopy=new Buffer(10);
bufCopy.fill("s");
console.log(bufCopy.toString("utf8"));