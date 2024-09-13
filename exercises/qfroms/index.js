// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.holder = new Stack();
    this.assistant = new Stack();
    this.next = undefined;
  }

  add(val){
    if (!this.holder.peek()) {
      this.next = val;
    }
    this.holder.push(val)
  }

  remove(){

    while (this.holder.peek()) {
      this.assistant.push(this.holder.pop())
    }

    const deletedValue = this.assistant.pop();
    this.next = this.assistant.peek();

    while (this.assistant.peek()) {
      this.holder.push(this.assistant.pop())
    }

    return deletedValue;
  }

  peek(){
    return this.next
  }
}

module.exports = Queue;
