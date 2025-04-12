//IIFE stands for immediately Invoked Function Expression
//as this function is invoked by itself it is used for private scope , such as encapsulation



(function(){
    console.log("Hello")
})();


//Function with Parameters

(function(a,b){
    console.log(a+b);
})(3,4)



//An NFE is a function expression that has a name. This name is available only inside the function itself (useful for recursion or debugging).

const Factorial = function fact(n){
        if(n<=1) return 1;
        return n * fact(n-1);   
}
console.log(Factorial(3)) //Here factorial function is used , fact cant be accessed here.
// console.log(fact(3)) //Stating error that fact is not defined.