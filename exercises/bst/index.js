// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
//            10                99
//          /     \
//        5        15
//       |          \
//      0            20 
//    /  \
//  -5    3

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data){
    const newNode = new Node(data);
    let currentNode = this;
    let isLookingForPlace = true;

    while (isLookingForPlace) {

      if( data > currentNode.data ){
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          isLookingForPlace = false;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          isLookingForPlace = false;
        }
      }
    }

  }

  contains(data){
    let currentNode = this;

    while (true) {
      if (currentNode === null) {
        return null;
      }

      if ( data > currentNode.data) {
        currentNode = currentNode.right;
        continue;
      }

      if ( data < currentNode.data) {
        currentNode = currentNode.left;
        continue;
      }

      if ( data === currentNode.data ) {
        return currentNode;
      }
    }
  }
}

module.exports = Node;
