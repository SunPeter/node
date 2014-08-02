/**
 * Created by peter on 14-8-2.
 */
//util.inherits(constructor, superConstructor)
//构造函数继承
var util=require("util");

function A(){
    this.target="A",
    this.display=function(){
        console.log(this.target);
    }
}

function B(){
    this.target="B";
}

util.inherits(B,A);


var instance=new B();
console.log(util.inspect(B,{showHidden:true}));

console.log(instance instanceof A);