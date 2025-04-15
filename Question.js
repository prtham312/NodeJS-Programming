//input a = [A,B,C,D]

let arr = ['A' , 'B' , 'C' , 'D'];
let res= []
for(let i =0 ; i<arr.length ; i++){
    for(let j = i+1 ; j< arr.length ; j++){
        res.push(Array(arr[i] + "," + arr[j]))
    }
}
let res1 = Array.from(res)
console.log(res)


{
    let arr = ['aab', 'abc', 'bba', 'aaabbb' ,'abcd'];
    let arr1 = [];
    
    for (let i in arr) {
        arr1.push(new Set(arr[i]));
    }
    
    for (let i =0 ; i< arr1.length ; i++) {
        let count = arr1[i].size;
        if(count == 2) console.log(`${Array.from(arr[i]).join('')} : 2`);
       else console.log(`${Array.from(arr[i]).join('')} : ${2* count}`);
    }
   
}



