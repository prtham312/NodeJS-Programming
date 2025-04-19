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

{
    //Transform and Log Using Callback
    const names = ["alice", "bob", "charlie"];
    function print(name){
        console.log(name)
    }
    function Transform(names , callback){
        
            let changes = names.map(item => item.charAt(0).toUpperCase() + item.slice(1))
            changes.forEach(callback)
        }
        Transform(names , print)
    }
