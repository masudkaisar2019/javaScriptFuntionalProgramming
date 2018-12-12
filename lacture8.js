//Closure in javaScript
// closer means to acccess a data from global scope in a function.

// var name = "Md Khan";

// function greeting(){
//     console.log('Hello '+ name);   
// }
// greeting()

//


function greeting(msg){
    return function(name){
        console.log(msg + " "+ name);  
    }
}
var good = greeting("Good Morning");
var Hello = greeting("Hello");

Hello("Md Masud ");
good("Md Khan");
//--  ƒ anonymous(name)arguments: nullcaller: nulllength: 1name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: (index):33[[Scopes]]: Scopes[2]0: Closure (greeting)msg: "Hello"1: Global {type: "global", name: "", object: Window}
