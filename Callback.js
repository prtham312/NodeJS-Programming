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