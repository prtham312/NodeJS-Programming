{
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
}

{
    //Nested if
 let user = {
    isLoggedIn : true ,
    isAdmin : true
}
if(user.isLoggedIn){
    if(user.isAdmin) console.log("Welcome Admin");
    else console.log("Welcome User")
}
else console.log("Login Now")
}


{
    // Ternary Operator
    let speed = 10;
    let status = speed > 100 ? "Too Fast" : "Good to GO"
    console.log(status)
}