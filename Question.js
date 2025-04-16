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

{
    //Remove all the numbers and punctuations from a string
    function clean(str){
        return str.toLowerCase().replace(/[^a-z]/g , '').split('').sort().join('')
    }
    console.log(clean("HE1!0"))
}

{
    //Longest Substring Without Repeating Characters
    let str = "abcdedsascdw";

    function lenstr(str) {
        let maxCount = 0;
    
        for (let i = 0; i < str.length; i++) {
            let str1 = "";
            let count = 0;
            for (let j = i; j < str.length; j++) {
                if (str1.includes(str[j])) {
                    break;
                } else {
                    count++;
                    str1 += str[j];
                }
            }
            if (count > maxCount) {
                maxCount = count;
            }
        }
        console.log(maxCount);
    }
    
    lenstr(str); 
    
}