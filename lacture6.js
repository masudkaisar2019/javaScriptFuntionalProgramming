// Callback Function 

// function hello(name){
//     print(name);  //call the function inside another function
// }

// function print(args){
//     console.log('Hello '+ args);  
// }
// hello("Md Khan")

//************************ */

// function hello(name,print){
//     print(name);
// }
// hello("masud",print)

// function print(arg){
//     console.log('hi' +" " + arg);  
// }
//*-----------callback function -----------------

// function hello(name,print){
//     print(name)
// }
// hello("Md Masud",function(name){
//     console.log("Hello "+ name);  
// })
// hello("Mr. Khan", function(name){
//     console.log('Hi how are You '+ name+ " ?");   
// })
// hello("Masud khan",function(name){
//     console.log('length of '+ name + "is = " + name.length);   
// })

//----------------------------

// function myFunc(name,print){
//     print(name);
// }
// function print(b){
//     console.log('Hello ' + b);
// }
// myFunc("Md Masud Kaisar Khan", function(name){
//     console.log("hello " + name);    
// })
// myFunc("Honey Ban", function(name){
//     console.log("hello " + name);    
// })

// myFunc("Tasmia Kadery", function(name){
//     console.log("The length of the name is   =  " + name.length );    
// })

//-----------little more deep ---------

// var me = {
//     name : "Md Masud ",
//     age: 29,
//     email:"masud08eee@gmail.com"
// }

// function printMyself(person,callback){
//     console.log('person: '+ person.name + '('+ person.age + ')');
//     if(person.age>=18){
//         callback(person.email);
//     } else{
//         console.log('You are too young...');
        
//     }  
// }

// printMyself(me,function(email){
//     console.log('Email sent to '+ email);
    
// })

//-----------calling two callback in one function as argument ----------- 

function print(data, callback1,callback2){
    console.log('Originam Data :' + data);
    callback1(data);
    callback2(data);   
}
print("Masud is awasome in coading ", function(data){
    var dataToUpper = data.toUpperCase();
    console.log('Upper Case: '+ dataToUpper);  
},function(data){
    var dataToLower = data.toLowerCase();
    console.log('Lower Case: '+ dataToLower);
    console.log('Length: '+ data.length);
    
})



