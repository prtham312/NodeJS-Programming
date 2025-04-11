let num = 1;
if(num%3 === 0 && num%5 === 0){
    console.log(`${num} is divisible by 3 and 5.`)
}
else if(num%3 === 0 && num%5 !==0){
    console.log(`${num} is divisible by 3.`)
}
else if(num%3 !== 0 && num%5 ===0){
    console.log(`${num} is divisible by 5.`)
}
    else console.log(`${num} is not divisible either by 3 or 5.`)