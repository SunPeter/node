/**
 * Created by peter on 14-8-2.
 */
var querystring=require("querystring");

var obj={
    foo: 'bar',
    baz: ['qux', 'quux'],
    corge: ''
}
console.log(querystring.stringify(obj));