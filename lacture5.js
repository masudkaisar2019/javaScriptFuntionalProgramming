
// anonymous function means the function does not have any name

// function(a){
//     console.log(a); 
// }

//------- forEach-------

// var arr = [2,3,5,8];
// arr.forEach(function(a){
//     console.log(a); 
// })

//-------- cllBack function -----

var arr = [2,4,5,6,7];
 function cbf(a){
     console.log(a); 
 }
 arr.forEach(cbf);

 //------------claiing a function from another function -----------------

 function caller(){
     return function(name){
        return "Caller calling you " + name;
     }
 }
 var x = caller();// caling the main function
 var y = x("Md Khan"); // calling the inner function with aurgument 
 y;
 var z = x("Honey Ban");// we can use the main function as much as we need just changing the argument
 z;
 var a = caller()("Honey bans");// one line execution ...
 a;





