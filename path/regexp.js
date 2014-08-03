/**
 * Created by peter on 14-8-2.
 */
var path=require("path");

//The platform-specific file separator. '\\' or '/'.
console.log('foo/bar/baz'.split(path.sep));
console.log('foo\\bar\\baz'.split(path.sep));


//The platform-specific path delimiter, ; or ':'
var entpath=process.env.PATH;
console.log(entpath);

console.log(entpath.split(path.delimiter));