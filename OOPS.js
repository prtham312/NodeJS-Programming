//class 
{
    class Person{
        constructor(name , age){
            this.name = name;
            this.age = age;
        }

        greet(){
            return `HI My name is ${this.name}.`
        }

        isAge(){
            return this.age>=18;
        }
    }

    let p1 = new Person( "Anik" , 19);
    let p2 = new Person("Diwas" , 16);
    console.log(p1.greet());
    console.log(p2.isAge());

    //Dynamic object update
    p2.name = "Raj";
    console.log(p2.name);

}