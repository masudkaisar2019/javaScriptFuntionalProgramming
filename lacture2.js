/*******
 * Md Masud Kaisar Khan
 * Functional JavaScript
 * First Class Function 
 * Lacture- 2
 *  
  *******/
 // Todays Topic
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
 console.log(anotherHello("masud"));
 
 // 2. A Function can be stored in an Array
 // 3. A function can stored in an Object field or property
 // 4. We can create function as needed 
 // 5. we can pass function as an argument
 // 6. We can return funcion from another function

