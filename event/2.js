/**
 * Created by peter on 14-7-28.
 */
var events=require("events");

var eventEmit=new events.EventEmitter();

var username="peter",password="123456";


//One-Time Event
eventEmit.once("login",function(username,password){
    console.log("username:"+username+"\n"+"password:"+password);
});

//事件执行
eventEmit.emit("login",username,password);
console.log("-------");
eventEmit.emit("login",username,password);
console.log("-------");