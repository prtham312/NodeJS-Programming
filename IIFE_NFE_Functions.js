//IIFE stands for immediately Invoked Function Expression
//as this function is invoked by itself it is used for private scope , such as encapsulation

const { constants } = require("buffer");



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


//Practice question on IIFE and NFE

//Calculating square of a number

;(function(num){
    console.log(Math.pow(num,2))
})(2);   //if function shows console.log is not defined , just put ';' as it will avoid overwritten.


//IIFE with closure counter

const counter = (function(){
    let count = 0;
    return {
        increment() { return count++},
        decrement() { return count--},
        getcount() {return count}
    }
})()
counter.increment(); // +1
counter.increment(); // +1
counter.decrement(); // -1
console.log(counter.getcount());
console.log(counter.count)


//NFE with Retry Logic

const tryTask = function retry(n){
    if (n === 0) {
        console.log("Failed after 3 attempts.");
        return;
      }
    
      const success = Math.random() > 0.5;
    
      if (success) {
        console.log("Task succeeded!");
      } else {
        console.log(`Retrying... attempts left: ${n - 1}`);
        retry(n - 1);
      }
}
tryTask(3);