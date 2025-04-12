const user = {
    name : "Thala" ,
    greet : function (lang){
        console.log(`Hola ${this.name}! , you has expertise in language : ${lang}`)
    }
}
const bindfunc = user.greet.bind(user);
bindfunc({user : 'Arun'} , "Eng")