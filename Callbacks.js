{function login(user , password , callback){
    if(user  && password ){
        console.log("Validating.....")
    }
    else {
        console.log('Not a valid user or password')
    }
    setTimeout( ()=>{
        if(user=="admin" && password=="admin"){
            callback(null , "succesfull login")
        }
        else 
        callback("Login failed" , null)
    }
    ,1500)
}
function handlelogin(error , message){
    if(!error){
        console.log(message)
    }
    else{
        console.log(error)
    }
}

login("admin" , "admins" , handlelogin)
}

{
    //array of users has valid users or not
    const credentials = [
        { user: "admin", password: "admin" },
        { user: "", password: "admin" },
        { user: "admin", password: "wrong" }
      ];
    credentials.forEach(item=>{
        if(item.user) console.log("valid")
            else console.log("invalid")
    })

}