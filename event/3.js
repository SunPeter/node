/**
 * Created by peter on 14-7-28.
 */
var events=require("events");

//Class Method
var EventEmitter=events.EventEmitter;
console.log(EventEmitter);

//instance
var eventEmit=new events.EventEmitter();

var username="peter",password="123456";


//事件注册
eventEmit.on("login",function(username,password){
    console.log("username:"+username+"\n"+"password:"+password);
});
eventEmit.on("login",function(username,password){
    console.log("---------");
});
//事件执行
eventEmit.emit("login",username,password);

//返回某一事件注册数量
var num=EventEmitter.listenerCount(eventEmit,"login");
console.log(num);