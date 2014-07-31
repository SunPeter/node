/**
 * Created by peter on 14-7-31.
 */
//buf.write(string, [offset], [length], [encoding])
var buf=new Buffer(10);
buf.write("asdfghjkl",0);
console.log(buf.length+":"+buf.toString());

//buf[index]
console.log(buf[2]);