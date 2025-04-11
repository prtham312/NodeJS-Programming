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

{
    //Sum of Array
    function arr_sum(arr){
    if(arr.length === 0 ) return 0;
    return arr[0] + arr_sum(arr.slice(1))
    }
    console.log(arr_sum([1,2,3,4,5,6]))
}


{
    //reverse a string using recursion
    function str_rev(string){
        string=string.trim();
        if(string === "") return "Invalid String";
        if(string.length===1) return string;
        return str_rev(string.slice(1)) + string[0];
    }
    console.log(str_rev("Anik"))
    console.log(str_rev("               "))
}