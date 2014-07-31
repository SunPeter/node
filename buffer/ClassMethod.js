/**
 * Created by peter on 14-7-31.
 */

//检验编码格式是否支持
console.log(Buffer.isEncoding("base64"));

//buf字节长度
console.log(Buffer.byteLength("ssd","utf8"));

//concat
var buf1=new Buffer("ssd"),
    buf2=new Buffer("saw");
console.log(Buffer.concat([buf1,buf2],6).toString("utf8"));
