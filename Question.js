//input a = [A,B,C,D]

let arr = ['A' , 'B' , 'C' , 'D'];
let res= []
for(let i =0 ; i<arr.length ; i++){
    for(let j = i+1 ; j< arr.length ; j++){
        res.push(Array(arr[i] + "," + arr[j]))
    }
}
console.log(res)


{
    let arr = ['aab', 'abc', 'bba', 'aaabbb' ,'abcd'];
    let arr1 = [];
    
    for (let i in arr) {
        arr1.push(new Set(arr[i]));
    }
    
    for (let i =0 ; i< arr1.length ; i++) {
        let count = arr1[i].size;
        let el = Array.from(arr[i]).join('')
        console.log(`${el} : ${factorial(count)}`);
       
    }
    function factorial(n){
        if(n===0 || n===1) return 1;
        return n * factorial(n-1);
    }
    console.log(factorial(5))
   
}



