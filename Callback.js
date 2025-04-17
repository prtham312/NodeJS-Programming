{function sayHi(){
    console.log("hey there")
}
function Greet(name , callback){ //Passing function as argument is known as Callbacks.
    console.log(name , "where?");
    sayHi();
}
Greet("Anik" , sayHi)}


{
    // Anonymous function
    function Greet(name , callback){
        console.log(name , " Hello");
        callback();
    }
    Greet("Anik" , function(){
        console.log("Maza Ma?")
    })
}

//Callbacks are useful in asynchronous code, like when making API calls, reading files, or waiting for a timer.
{
    //Callbacks in Settimeout()
    setTimeout(function(){
        console.log("This message has been printed through callback after 2 seconds")
    } , 2000)   
}


{
    //Basic functioning of API in callbacks
    function Data(callback){
        console.log('Data has been Processed')
        callback();
    }
    Data(function
        (){
            console.log("Data has been fetched succesfully")
        }
    )
// Here as this function has been fetched , callback will be implemented after this.
}