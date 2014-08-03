/**
 * Created by peter on 14-8-2.
 */
var querystring=require("querystring");

var str='foo=bar&baz=qux&baz=quux&corge';


console.log(querystring.parse(str));