//IIFE stands for immediately Invoked Function Expression
//as this function is invoked by itself it is used for private scope , such as encapsulation



(function(){
    console.log("Hello")
})();


//Function with Parameters

(function(a,b){
    console.log(a+b);
})(3,4)