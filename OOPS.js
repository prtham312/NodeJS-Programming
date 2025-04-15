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


{
    // regular function vs and arrow function for this reference
    class Test {
        constructor() {
          this.name = "NodeJS";
        }
      
        regularFunc() {
          console.log("Regular:", this.name);
        }
      
        arrowFunc = () => {
          console.log("Arrow:", this.name);
        }
      }
      
      let t = new Test();
      t.regularFunc(); // Regular: NodeJS
      t.arrowFunc();   // Arrow: NodeJS
      let j = t;
      j.arrowFunc();
}
{
    const obj = {
        value: 42,
        
        regularMethod: function () {
          console.log(this.value); // `this` refers to `obj`
        },
        arrowMethod : () => {
            console.log(this.value); // `this` refers to the global object, not `obj`
          },
      };
      
      obj.arrowMethod(); // Output: undefined (or error in strict mode)
      obj.regularMethod(); // Output: 42
      

      //this in object refers to windows so it will show output as undefine
      //this in class take context from nearby context so it will define value.
}

{


    //Prototype
    //Instead of copying the function to every object, all instances share the same method, saving memory.
    function Person(name){
        this.name = name;

        Person.prototype.sayHello = () => {
            console.log(`Hi my name is ${this.name}`)
        }

        Person.prototype.toString = function(){
            return this.name
        }
    }

    let p1 = new Person(32);
    p1.sayHello();
    //sayHello() is not inside the constructor — it’s in the prototype. All instances share it, saving memory.
    console.log(p1.toString()); //it will give output [Object ,Object] as it is taking tostring() prototype from object unless we define it in Person also

    /*
        So when you call p1.sayHello(), JavaScript checks:
        Is sayHello in p1?
        If not, look in p1.__proto__ (which is Person.prototype)
        If still not found, look in Object.prototype
    */

        //in class methods and functions are itself prototypes , js define them as prototype
}

{
    //Inheritance
    //JS does not support multiple inheritance unlike C++ and ptyhon.
    //We can achieve it through mixins.
    // extends is used for make child class from parent class
    // super is used for calling properties in child class from parent class
    //this cannot be used in child class before declaring super()
    //Method overriding is possible
    //after overriding we can still use previous function through super.methodname()

class Car{
    constructor(colour , speed){
        this.colour = colour;
        this.speed = speed;
        }

    vroom() {
        console.log(`That car in ${this.colour} is running at a speed of ${this.speed}`)
    }
    }

class BMW extends Car{
    constructor(colour ,speed ,Model ,Year){
        super(colour , speed);
        this.Model= Model;
        this.Year =Year
    }

    explain() {
            console.log(`That ${this.colour} car is ${this.Model},${this.Year} and running at a speed of ${this.speed}`)
    }
}
const E = new BMW("red" , 220 , "E-Class" , 1973 )
E.explain(); 

}



{
    //Encapsulation
    // Private properties are specified by #
    //Before #, developers used _ to show "don't touch this" , This is not truly private — it's just a convention.
    class Bank {
        constructor(name){
            this.name = name;
        }

        #balance = 0 //private property
        deposit(amount){
            if(amount>0) 
                {
                    this.#balance+=amount
                }
            else console.log("Not enough amount , Try Again")
        }

        getBalance(){
            return this.#balance
        }
    }
    const holder = new Bank("Anik")
    holder.deposit(1000);
    holder.deposit(0);
    console.log(holder.getBalance());
    console.log(holder.balance) //here it will print undefined as private members cannot be accessed.
}
{

    //Private Methods in class
    class SecretBox {
        #openSecret() {
          return "Hidden Treasure!";
        }
      
        reveal() {
          return this.#openSecret(); // allowed inside
        }
      }
      
      const s = new SecretBox();
      console.log(s.reveal());     // Hidden Treasure!
    //console.log(s.#openSecret()); //Gives error because opensecret is private method
}


{
    //Static
/*
Belong to the class itself, not the instances (objects) of the class.
You can use them without creating an object.
*/

    class MyClass {
        static myStaticMethod() {
          return "I belong to the class";
        }
      }

      MyClass.myStaticMethod(); //Works
        const obj = new MyClass();
        // obj.myStaticMethod();     //Error: not a function

}

{
    //Composition
    //Favor composition over inheritance” — especially in JavaScript where functions and objects are flexible.

    const canFly = {
        fly() {
          return `${this.name} is flying!`;
        }
      };
      
      const canSwim = {
        swim() {
          return `${this.name} is swimming!`;
        }
      };
      
      function createDuck(name) {
        return {
          name,
          ...canFly,
          ...canSwim
        };
      }
      
      const duck = createDuck("Donald");
      console.log(duck.fly()); 
      console.log(duck.swim()); 
      
}

{
    //InstanceOf Property
    //To check the actual type of an object at runtime.

    class Animal{}
    class Cat extends Animal{}
    const c = new Cat();
    console.log(c instanceof Cat)
    console.log(c instanceof Animal)
    console.log(c instanceof Object)
}

{
    //Constructor always points towards class/object that created it.
    function Person(name) {
        this.name = name;
      }
      
      const p = new Person("John");
      
      console.log(p.constructor);         // [Function: Person]
      console.log(p.constructor === Person); // true 

      const clone = new p.constructor("Mike");
      console.log(clone.name);

}      

{
    //Object create through proto
    //Object.create makes
    /* 
    Pure prototypal inheritance
    Great for lightweight object patterns
    Avoids constructor syntax when unnecessary
    */
    const animal = {
        speak() {
          console.log(`${this.name} makes a sound`);
        }
      };
      
      const dog = Object.create(animal);
      dog.name = "Rex";
      dog.speak(); // Rex makes a sound
}

{
//closure
/*
When you define a function inside another function,
     and the inner function uses variables from the outer function, then the inner function "closes over" those variables.
Even if the outer function is done executing, the inner function remembers those variables and can still access them.
*/
function outer() {
    let count = 0; // outer variable
  
    function inner() {
      count++;           // uses outer variable
      return count;
    } 
  
    return inner;         // return inner function
  }
  
  const counter = outer(); // outer() executes and returns inner
  console.log(counter()); // 1
  console.log(counter()); // 2
  
  
}

{
    //Polymorphism
    class Animal {
        speak() {
          console.log("Animal speaks");
        }
      }
      
      class Dog extends Animal {
        speak() {
          console.log("Dog barks");
        }
      }
      
      class Cat extends Animal {
        speak() {
          console.log("Cat meows");
        }
      }
      
      const animals = [new Dog(), new Cat(), new Animal()];
      
      for (let a of animals) {
        a.speak();
      }
      
}
{
    //Practise questoin in cluding all topics

    class Shape{
        constructor(name){
            if(this.name===Shape){
                throw new Error("Cannot instantiate abstract class Shape");
            }
            this.name = name;
        }
        draw(){
            throw new Error("Shape has to be forced to draw as per method")
        }
    }
    class Circle extends Shape{
        #radius;
        constructor(radius){
            super("Circle")
            this.#radius = radius
        }
        draw(){
            console.log(`Area of ${this.name} is ${22.7*this.#radius*this.#radius}`)
        }
    }
    class Rectangle extends Shape{
        #width;
        #height;
      
        constructor(width, height) {
          super("Rectangle");
          this.#width = width;
          this.#height = height;
        }
      
        draw() {
          console.log(`Drawing a ${this.name} of size ${this.#width}x${this.#height} is ${this.#width*this.#height}`);
        }
    }

    const shapes = [
        new Circle(5),
        new Rectangle(10, 20)
      ];
      
      shapes.forEach(shape => shape.draw());
}