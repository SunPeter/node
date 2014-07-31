/**
 * Created by peter on 14-7-28.
 */
var events=require("events");

var eventEmit=new events.EventEmitter();

var username="peter",password="123456";


//事件注册
eventEmit.on("login",function(username,password){
   console.log("username:"+username+"\n"+"password:"+password);
});

//事件执行
eventEmit.emit("login",username,password);