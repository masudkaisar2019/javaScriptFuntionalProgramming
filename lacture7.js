//---------return a function from a function ------------

// function host(){
//     console.log('I am a host function ');
//     return function(){
//         console.log('I am a child function ');   
//     }
// }
// var a= host()();
// console.log(a);


//------------------------------

// function greeting(msg){
//     return function(name){
//         console.log(msg + " "+ name);  
//     }
// }
// var good = greeting("Good Morning");
// var Hello = greeting("Hello");

// Hello("Md Masud ");
// good("Md Khan");


//------return a function-----

function greeting(msg){
    function ret(name){
        console.log(msg + " "+ name);     
    }
    return ret;
}
 var good = greeting("Good mornig");
 var hello = greeting("Hello ");
 console.log(hello);
 
 hello("Masud ");
 good("Masud ");
console.log(hello);




