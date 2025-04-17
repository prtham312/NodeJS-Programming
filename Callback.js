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


{
    //Double each number using map
    let arr = [1,2,3,4,5]
    arr.map(function(num){
        console.log(num*2)
    })
}

{
    //filter number
    let arr = [ 1,2,3,4,5,6,7,8,9,0]
    let even = arr.filter(function(num){
       return num%2==0
    })
    console.log(even)
}

{
    //sum of all elements using reduce
    let arr = [ 1,2,3,4,5,6,7,8,9 ]
    let res = arr.reduce(function(num,acc){
        return num+acc
    },0)
    console.log(res)
}
{
    //Capitalize the first letter of each word in a string.
    let str = "first letter of each word is going to be capitalized in this statement "
    let words = str.split(" ")
    let res = words.map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    console.log(res.join(" "));
}

{
    function capitalizeWords(str) {
        return str
          .split(" ")
          .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ");
      }
      
      console.log(capitalizeWords("hello world from js")); 
      // "Hello World From Js"
      
}