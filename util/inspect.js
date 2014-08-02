/**
 * Created by peter on 14-8-2.
 */
/*
 util.inspect(object, [options])
 */
/*
 showHidden - if true then the object's non-enumerable properties will be shown too. Defaults to false.
 depth - tells inspect how many times to recurse while formatting the object. This is useful for inspecting large complicated objects. Defaults to 2. To make it recurse indefinitely pass null.
 colors - if true, then the output will be styled with ANSI color codes. Defaults to false. Colors are customizable, see below.
 customInspect - if false, then custom inspect() functions defined on the objects being inspected won't be called. Defaults to true.
 */
var util=require("util");

console.log(util.inspect(Date,{showHidden:true,depth:2,colors:true}));