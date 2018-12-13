
// In regular method we can print our odd number like this .
var arr = [2,3,4,6,7,9,8];
var newArray = [];

for(var i= 0;i<arr.length;i++){
    //for odd number
    // if(arr[i]%2 ==1){
    //     newArray.push(arr[i]); 
    //     // console.log(arr[i]);   
    // }

    //for even number
    if(arr[i]%2 ==0){
        newArray.push(arr[i]); 
        // console.log(arr[i]);   
    }
}
    console.log(newArray);
    

//---Now we are using filter method ----

// var array = [1,2,3,45,6,7,8];
// var filterArray = array.filter(function(value){
//     return value % 2 == 0;
// });
// console.log('Filter array is  '+ filterArray);


// now we are making the filter function with callback function 

var arr = [2,3,4,5,6,7,8,9];
function myFilter(arr,callback){
    newArray = [];

    for(var i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray;
}
//---- for odd number 
var myArrray = myFilter(arr,function(element){
    return element % 2 == 1;
})
myArrray
//----for even number 
var myArrray = myFilter(arr,function(element){
    return element % 2 == 0;
})
myArrray