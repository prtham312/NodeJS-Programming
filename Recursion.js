{
    //Factorial
    function factorial(n){
        if(n===0 || n===1) return 1;
        return n * factorial(n-1);
    }
    console.log(factorial(5))
}


{
    //Fibonnaci Series
    function Fibonnaci(n){
        if(n <= 1) return 1;
        return Fibonnaci(n-1) + Fibonnaci(n-2);
    }
    console.log(Fibonnaci(6))
}