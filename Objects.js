{
    const user = {
        name : "Anik",
        age : 22,
        city : "Mumbai",
        family : {
            house : "Indore",
            language : "Hindi"
        }
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
     console.log(user.family.language) 
     const {name , family : {house}} = user;
     console.log(name)
     console.log(house)
}

{
    //Array of Objects
    let arr = [
        { name: "Alice", id: 1 },
        { name: "Bob", id: 2 },
        { name: "Charlie", id: 3 }
    ]
    for(let i of arr){
        console.log(i.name)
        console.log(i.id)
    }
}

{
    //Object Assign
    const user = {
        anik : 22,
        diwas : 21 ,
        dhruv : 23
    }
    let user1 = Object.assign({} , user) //through object.assign() property
    let user2 = { ... user} // through spread operator
    user1.anik = 23;
    user2.dhruv = 25;
    console.log(user);
    console.log(user1);
    console.log(user2);
    // const {anik , dhruv} = {user1,user2} //will be undefine because both have diffrent properties
    const {anik} = user1;
    const{dhruv} = user2;2
    console.log(anik);
    console.log(dhruv)
}