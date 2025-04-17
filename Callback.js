{function sayHi(){
    console.log("hey there")
}
function Greet(name , callback){ //Passing function as argument is known as Callbacks.
    console.log(name , "where?");
    sayHi();
}
Greet("Anik" , sayHi)}