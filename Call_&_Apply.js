let user1 = {
    name : 'John' ,
    Print : function(age){
        console.log(`Hi! My name is ${this.name} and age is ${age}`)
    }
};
let user2 = {
    name : 'Alice',
}
user1.Print.call(user2 , 34)
user1.Print.apply(user2 , [32])

// call and apply do the same thing
// only diffrence is call pass the (argument,parameters) where parameters numbers are known by user.
// in apply instead of individual arguments it passes full array (argument , array[parameters]).