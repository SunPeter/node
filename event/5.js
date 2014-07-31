/**
 * Created by peter on 14-7-28.
 */
var events=require("events");

var eventEmit=new events.EventEmitter();

var username="peter",password="123456";

function handler(username,password){
    console.log("username:"+username+"\n"+"password:"+password);
}
//事件注册
eventEmit.on("login",handler);

//事件执行
eventEmit.emit("login",username,password);


//事件解除
eventEmit.removeListener("login",handler);

eventEmit.emit("login",username,password);