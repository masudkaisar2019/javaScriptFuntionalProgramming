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

//-------------------------------------------

function example2(){
    return{
        name: "Md Masud Khan",
        skill : ["Java", "JavaScript"],
        print: function(){
          var myOutput =  this.name,
        }
    }
}
var obj = example2();
console.log(obj.print());




