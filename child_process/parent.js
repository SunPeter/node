/**
 * Created by peter on 14-8-23.
 */
var child_process=require("child_process");

var child = child_process.spawn('node', [ 'exec.js' ]);
child.kill('SIGTERM');
