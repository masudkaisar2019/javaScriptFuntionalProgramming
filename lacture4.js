// function name(firstName,lastName,gender){
//     var output
//     if(gender == "male"){
//          output = "Mr. " + firstName + " "+ lastName
        
//     }
//     else if(gender== "female"){
//          output = "Mrs. " + firstName + " "+ lastName
//     }

//     return output;
// }
// var fullName = name("Md","Masud","male");
// console.log(fullName);

//*************************************** */

function example(){
    return 10 + 20*30;
}
var total = example();
console.log(total);

//---------return an object in a function ----------------------------------

function example2(){
    return{
        name: "Md Masud Khan",
        skill : ["Java", "JavaScript"],
        print: function(){
          var myOutput =  this.skill;
          return myOutput;
        }    
    }
}
var obj = example2();
console.log(obj.print());




