/**
 * Created by peter on 14-7-30.
 */
var spawn = require('child_process').spawn,
    free  = spawn("ls -l",function(err,stdout,stderr){
           if(!err){
               console.log(stdout);
           }
    });



