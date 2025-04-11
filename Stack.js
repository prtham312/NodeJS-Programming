{
    //Implementation of stack using  Array
    class Stack{
        constructor(){
            this.items= [];
        }
        push(elem){
            this.items.push(elem)
        }
        pop(){
            if(this.items.length===0) return "Underflow"
           return this.items.pop();
        }
        peek(){
           return this.items[this.items.length-1]
        }
        isEmpty(){
            return this.items.length===0;
        }
        print(){
            console.log(this.items.join(' '))
        }
    }
let el = new Stack();
let el1 = new Stack();
el.push(1);
el.push(2);
el.push(3);
el.push(4);
el.push(5);
el.push(6);
el.print();
el.pop();
el.print();
console.log(el.isEmpty());
console.log(el.peek());
console.log(el1.isEmpty());
}
