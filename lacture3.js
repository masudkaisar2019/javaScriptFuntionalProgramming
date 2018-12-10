// Nested function 

    // function outer(){
    //     var a = 10;

    //     function inner(){
    //         var a = 10;
    //         console.log('I am inner function');  
    //         console.log(a); 
    //     }
    //     inner();
    //     console.log(a);
   
        
    // console.log('I am outter function');
    // }
    // outer();

function add(a,b){

    function sum(){
        return a+b;
    }
    function sub(){
        return a-b ;
    }
    function times(){
        return a*b;
    }
    function div(){
        return a/b;
    }

    return sum() + sub() + times() + div();
}

var result = add(10,5);

console.log(result);

