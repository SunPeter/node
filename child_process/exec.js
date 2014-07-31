/**
 * Created by peter on 14-7-30.
 */
var child_process=require("child_process"),
    exec=child_process.exec,
    result=null;
exec("ls -l",function(err,stdout,stderr){
    if(!err){
        result=stdout;
        console.log(result);
    }
});


