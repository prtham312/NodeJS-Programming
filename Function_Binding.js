const user = {
    name : "Thala" ,
    greet : function (lang){
        console.log(`Hola ${this.name}! , you has expertise in language : ${lang}`)
    }
}
const bindfunc = user.greet.bind(user);
bindfunc({user : 'Arun'} , "Eng")





const person = {
    firstName: "Naman",
    lastName: "Jain",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const member = {
    firstName: "Anik",
    lastName: "Jain"
  };
  
  let getFullName = person.fullName.bind(member);
  
  console.log(getFullName());
  