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


    //Nested Ternary
    let age = 19
    let category = age > 10 ? age>18 ? "Adult" : "Teen" : "Kid"
    console.log(category)
}


{
    //Logical operators in conditioning
    let CurrentHour = new Date().getHours();
    let user = {
        isLoggedIn : true , 
        isAdmin : true
    }
    if(user.isLoggedIn && user.isAdmin && CurrentHour >= 9 && CurrentHour <= 17){
        console.log(`Hello Admin , You logged in at ${CurrentHour}`)
    }
    else console.log(`Acess Denied!! You're late or don't have admin role.`)
}