/**
 * Created by peter on 14-6-30.
 */
var page=require("webpage").create();

page.open("http://localhost:8080/asdasda",function(state){
    if(state=="success"){
        console.log("success");
        phantom.exit();
    }
    else{
        console.log("error");
    }
})