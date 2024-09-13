// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  // Stephen did it better/simpler
  constructor(data, node){
    this.data = data;
    this.next = node || null;
  }
}

// Los metodos getAt, removeAt, insertAt son la base principal de la que podrian salir los demas si se hubiese pensado mejor desde un principio
class LinkedList {
  constructor(){
    this.head = null;
  }

  // Stephen did it better/simpler
  insertFirst(data){
    const newNode = new Node(data);

    if (this.head) {
      newNode.next = this.head;
    }
  
    this.head = newNode;
  }
  
  // Stephen did it better/simpler
  size(){
    let thereIsANode = !!this.head;
  
    if (!thereIsANode) {
      return 0;
    }
  
    let count = 0;
    let currentNode = this.head;

    while (thereIsANode) {
      count++;
      currentNode = currentNode.next;

      if (!currentNode) {
        thereIsANode = false;
      }
    }

    return count;
  }

  getFirst(){
    return this.head;
  }
  
  // Stephen did it better/simpler
  getLast(){
    let thereIsANode = !!this.head;
  
    if (!thereIsANode) {
      return null;
    }

    let currentNode = this.head;
    let lastNode;

    while (thereIsANode) {
      lastNode = currentNode;
      currentNode = currentNode.next;

      if (!currentNode) {
        thereIsANode = false;
      }
    }

    return lastNode;
  }

  clear(){
    this.head = null;
  }
 
  // Stephen did it better/simpler
  // falto evaluar si head es null, en este caso puede haber un throw error
  removeFirst(){
    this.head = this.head.next;
  }

  // Stephen did it better/simpler
  removeLast(){  
    if (this.size() <= 1) {
      this.head = null;
      return;
    }

    let currentNode = null;
    let nextNode = this.head

    while (true) {

      const isNextNodeTheLast = nextNode.next === null

      if (isNextNodeTheLast) {
        currentNode.next = null;
        break
      }

      currentNode = nextNode;
      nextNode = nextNode.next;
    }
  }

  insertLast(data){
    const newNode = new Node(data);
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode
    }
  }

  // Stephen did it simpler, but i did it better
  getAt(index){

    const isNegativeIndex = index < 0;
    const thereAreNoNodes = !this.head;
    const indexAboveCurrentAmount = this.head && index >= this.size()

    if (isNegativeIndex || thereAreNoNodes || indexAboveCurrentAmount) {
      return null
    }
  
    let count = 0;
    let currentNode = this.head;

    while (true) {
      if (count === index) {
        return currentNode;
      }

      count++;
      currentNode = currentNode.next;
    }
  }

  // Stephen did it better/simpler
  removeAt(index){
    const isNegativeIndex = index < 0;
    const thereAreNoNodes = !this.head;
    const indexAboveCurrentAmount = this.head && index >= this.size()

    if (isNegativeIndex || thereAreNoNodes || indexAboveCurrentAmount) {
      return;
    }

    if (index===0) {
      this.head = this.head.next;
      return;
    }
  
    let count = 1;
    let currentNode = this.head.next;
    let previousNode = this.head;

    while (true) {
      if (count === index) {
        previousNode.next = currentNode.next;
        return;
      }

      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // Stephen did it better/simpler
  insertAt(data, index){
    const isNegativeIndex = index < 0;
    const indexIsTheFirstElement = index===0;
    const thereAreNoNodes = !this.head;
    const indexAboveCurrentAmount = this.head && index >= this.size()

    if (isNegativeIndex) {
      return;
    }

    if (indexAboveCurrentAmount || thereAreNoNodes) {
      this.insertLast(data)
      return;
    }

    if (indexIsTheFirstElement || thereAreNoNodes) {
      this.insertFirst(data)
      return;
    }
  
    let count = 1;
    let currentNode = this.head.next;
    let previousNode = this.head;

    while (true) {
      if (count === index) {
        const newNode = new Node(data);

        previousNode.next = newNode;
        newNode.next = currentNode;
        return;
      }

      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  forEach(callback) {
    for (const node of this) {
      callback(node)
    }
  };

  // Stephen did it better/simpler
  [Symbol.iterator]() {
    const classInstance = this; 
    let currentNode = null

    return {
      next() {

        if (currentNode === null) {
          currentNode = classInstance.getFirst()
        } else {
          currentNode = currentNode.next;
        }

        const currentState = currentNode ? false : true;

        return { 
          value: currentNode, 
          done: currentState 
        }
      }
    };
  }
}

module.exports = { Node, LinkedList };
