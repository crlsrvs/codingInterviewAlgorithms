// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor(){
    this.data = [];
  }

  push(value){
    this.data.unshift(value);
  }
  pop(){
    return this.data.splice(0, 1)[0];
  }
  peek(){
    return this.data[0]
  }
}

module.exports = Stack;
