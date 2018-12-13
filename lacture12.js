// learn javaScript map function 


// var arr = [2,3,4,5,6,8,9];

// var mapedArr = [];
// for(var i= 0; i<arr.length; i++){
//     mapedArr.push(arr[i]+2);
// }
// console.log('mapped array is '+ mapedArr);


// var arr = [2,3,4,5,6];
// var mapArr = [];
// for(var i=0;i<arr.length;i++){
//     mapArr.push(arr[i]*2)
// }
// console.log(mapArr);

//Using map function 

// var arr = [2,3,4,5,6,7];
// var newArray =arr.map(function(value){
//     return value + 2 ;
// })
// console.log("new Array is : " + newArray);


// now we are making our map function 

var arr = [3,4,5,6,7,8];
function myMap(arr,callback){
    var newarr = [];
    for(var i= 0;i<arr.length; i++){
        // var data = callback(arr[i])
        newarr.push(callback(arr[i]));
        // newarr.push(data);
    }
    return newarr
}
var myArray = myMap(arr,function(value){
    return value * (5 + 2*6);
})
console.log('My new map array is : '+ myArray);
