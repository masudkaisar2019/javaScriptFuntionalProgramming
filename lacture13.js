// learning how to make reduce function and how to use the function and we will learn how to make by using callback function 
// --- result -----


// var arr = [5,6,7,8,9,2,3,4];
// var sum = 0;
// for(var i= 0;i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log('sum is '+ sum );

// ----Using Reduce function--------

var arr = [2,3,4,5,6,8];

var newArr = arr.reduce(function(a,b){
    return a+ b;
})
newArr



