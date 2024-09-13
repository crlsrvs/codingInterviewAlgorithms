// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(dataProp={}){
    this.data = dataProp;
    this.children = [];
  }

  add(rawData){
    const newNode = new Node(rawData);
    this.children.push(newNode);
  }

  remove(rawData){
    this.children = this.children.filter(node => node.data !== rawData);
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    let currentNode = this.root;
    const queue = [];

    while (
      typeof currentNode === 'number' ||
      typeof currentNode === 'string' ||
      typeof currentNode === 'boolean' ||
      typeof currentNode === 'object' ||
      typeof currentNode === 'function'
    ) {
      fn(currentNode)
      if (currentNode.children?.length !== 0) {
        queue.push(...currentNode.children)
      }
      currentNode= queue.shift();
    }
  }

  traverseDF(fn){
    const queue = [this.root];
    while(queue.length){
      const currentNode = queue.shift();
      queue.unshift(...currentNode.children);
      fn(currentNode);
    }
  }
}

module.exports = { Tree, Node };
