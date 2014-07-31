/**
 * Created by peter on 14-7-31.
 */
var buf=new Buffer("asdfgh");
console.log(buf);

var json=JSON.stringify(buf);
console.log(json);

var copy=new Buffer(JSON.parse(json));
console.log(copy);