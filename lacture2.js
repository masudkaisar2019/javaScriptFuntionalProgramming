/*******
 * Md Masud Kaisar Khan
 * Functional JavaScript
 * First Class Function 
 * Lacture- 2
 *  
  *******/
 // Todays Topic
    //regular function 
    function sayName(name){
        return "Hello, " + name;
    }
 

 //1. A function can store in a variable 

    var hello = sayName;
// var fun = sayName("Masud");
// console.log(hello);
// console.log(fun);
// var result = hello("masud");
// result;
    console.log(hello("masud"));
    var anotherHello = hello;
    console.log(anotherHello("Masud Khan"));
 
 // 2. A Function can be stored in an Array

 var arr = [1,2,3,anotherHello("masud")];
 arr.push(sayName("khan"));
 console.log(arr);

 


 // 3. A function can stored in an Object field or property

 var person = {
     name : "Md Masud",
     funcName: hello,
     print: function(){
         console.log("hi");   
     }
 }
 console.log(person.funcName("masud"))

 // 4. We can create function as needed 

 var sum = 10 + (function(){return 30})();
 sum;

 // 5. we can pass function as an arguments

 function wow(name,fun){
     return fun(name);
 }
 var result = wow("Md Masud kaisar khan",sayName);
 console.log(result);
 

 // 6. We can return funcion from another function

 function base(b){
     return function(n){
         var result =1;
         for (var i= 0; i<b; i++ ){
            result *= n;
         }
         return result;
     }
 }
//  var power = base(2);
//  var result = power(10);
//  result;
var result = base(3)(5);
result;



