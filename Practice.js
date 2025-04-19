  //IIFE

{
    (function(a,b){
        console.log(a+b)
    })(3,7)
}

{
    (function(array){
        console.log(array.filter(item => item>=2 && item<11))
    })([1,34,2,1,3,5,32,11,2,3,44,6,7,88,9,11,2])
}
{
    (function(object){
        console.log(object.user + " works as " + object.profession)
    })({user : "Saleem",
        profession : "Tailor"
    })
}