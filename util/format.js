/**
 * Created by peter on 14-8-2.
 */
//util.format(format, [...])
/*
%s - String.
%d - Number (both integer and float).
%j - JSON.
% - single percent sign ('%'). This does not consume an argument.
*/


var util=require("util");
console.log(util.format("%s","asdaasd"));

console.log(util.format("%d:%d",12,34));

console.log(util.format("%j",{"name":"ssd"}));