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


{
    //Check for balanced paranthesis
    function isBalanced(str){
        let stack = [];
        const map = { ')' : '(' , '}' : '{' , ']' : '['}
        for(let char of str){
            if([ '(' , '{' , '['].includes(char)){
                stack.push(char);
            }
            else if([')', '}' , ']'].includes(char)){
                if(stack.pop() !== map[char]) return false;
            }
        }
            return stack.length===0;
    }
    console.log(isBalanced('{([])}'));
    console.log(isBalanced('{([]}'));
}

{
    //Reverse a string using Stack
    
    function Rev(str){
        const stack = str.split('');
        let rev= "";
        while(stack.length>0){
            rev+=stack.pop()
        }
        return rev;
    }
console.log(Rev("Hello"))
    }