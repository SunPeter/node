/**
 * Created by peter on 14-8-2.
 */
//util.isArray(object)

var util=require("util");

console.log(util.isArray([1,2,3]));

console.log(util.isRegExp(/\d+/g));

console.log(util.isDate(new Date()));