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