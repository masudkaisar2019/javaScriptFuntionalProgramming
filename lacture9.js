// ----sort array ----

// var arr = [1,10,44,66,55,77,6,7,23,31,29];
// arr.sort();
// console.log(arr);


var arr = [1,10,44,66,55,77,6,7,23,31,29];
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);


var obj = [
    {name: "Md Masud",age:29},
    {name:"Dastagir",age:30},
    {name:"Regan",age:31},
    {name:"Bindu", age:33},
    {name:"Jahed",age:25},
    {name:"Robbani",age:35} 
]

// ----- sort by age ------
// obj.sort(function(a,b){
//     return a.age- b.age;
// })

// -----sort by name -------

obj.sort(function(a,b){
    // return a.name- b.name;
    if(a.name>b.name){
        return 1;
    } else if(a.name<b.name){
        return -1;
    } else{
        return 0;
    }
})
console.log(obj);



