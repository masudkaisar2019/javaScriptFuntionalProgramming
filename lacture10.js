// JavaScript forEach function implimentation...


var arr = [1,2,3,4,5];
// arr.forEach(function(a, index){
//     console.log( 'element is '+a + " and "+'index is '+ index + " arr " + arr );  
// })


//making our own forEach with callback function 

function loop(arr,callback){
    for(var i= 0;i<arr.length;i++){
        callback(arr[i]);  
    }
}
loop(arr,function(element){
    console.log('Element is '+ element);
    
})