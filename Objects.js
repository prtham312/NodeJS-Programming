{
    const user = {
        name : "Anik",
        age : 22,
        city : "Mumbai",
    }
    console.log(user.name);
    console.log(user.age);
    console.log(user.city)
    user.gender = "Male"
    console.log(user.gender);
    delete user.city
    console.log(user.city)
    console.log(user.hasOwnProperty("city"))
    for(let [key,value] of Object.entries(user)){
            console.log(`${key} has value : ${value}`)
    } 
    let Descr = function () {
        console.log(`${user.name} is of ${user.age} years old!` )  //reference of object should be given
     }
     Descr(); //no need to give object name for function call
}