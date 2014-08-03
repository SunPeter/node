/**
 * Created by peter on 14-8-2.
 */
//path.resolve([from ...], to)

var path=require("path");

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));