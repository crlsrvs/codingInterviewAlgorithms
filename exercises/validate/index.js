// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
//            10                
//          /    \
//        5       15
//       |  \    | \
//      0           20 
//    |  \         |  \
//       99
//      |  \

function validate(node, min = null, max = null) {
  const weAreOnRootNode = min === null && max === null;

  if (weAreOnRootNode) {
    const leftSideClear =  validate(node.left, null, node.data);
    const rightSideClear = validate(node.right, node.data, null);
    return leftSideClear && rightSideClear;
  }

  const nodeExists = node !== null;
  const weAreOnLeftSide = min === null;

  if (nodeExists) {
    if (weAreOnLeftSide) {
      const nodeMatchTreePattern = node.data < max;

      if (nodeMatchTreePattern) {
        return validate(node.left, null, max) && validate(node.right, null, max);
      } else {
        return false
      }
    } else {
      const nodeMatchTreePattern = node.data > max;
  
      if (nodeMatchTreePattern) {
        return validate(node.left, node.data, null) && validate(node.right, node.data, null);
      } else {
        return false
      }
    }
  } else {
    return true
  }
}

// function validate(node, min = null, max = null) {
//   const weAreOnRootNode = min === null && max === null;

//   if (weAreOnRootNode) {
//     const leftSideClear =  validate(node.left, null, node.data);
//     const rightSideClear = validate(node.right, node.data, null);
//     return leftSideClear && rightSideClear;
//   }

//   const weAreOnLeftSide = min === null;

//   if (weAreOnLeftSide) {
//     const nodeExists = node !== null;
//     const nodeMatchTreePattern = node.data < max;
//     const nodeRespectOldest = node.data < max;

//     if (nodeExists && nodeMatchTreePattern) {
//       validate(node.left, null, node.data);
//       validate(node.right, node.data, null);
//     }
//   }
// }

// function validate(node, min = null, max = null) {
//   const leftNodeExist =  node.left !== null;
//   const rightNodeExist =  node.right  !== null;

//   let leftSideIsClear  = true;
//   let rightSideIsClear = true;

//   if (leftNodeExist) {
//     leftSideIsClear =  node.left  < node.data;
//   }

//   if (rightNodeExist) {
//     rightSideIsClear = node.right > node.data;
//   }
  

//   return validate(node.left, null, node.data) && validate(node.right, node.data, null)

// }



// function validate(node, min = null, max = null) {
//   const weAreOnRootNode = min === null && max === null;

//   if (weAreOnRootNode) {
//     const leftSideClear =  validate(node.left, null, node.data);
//     const rightSideClear = validate(node.right, node.data, null);
//     return leftSideClear && rightSideClear;
//   }

//   const weAreOnLeftSide = min === null;

//   if (weAreOnLeftSide) {
    
//     if (node && node.data < max) {
//       return validate(node.left, null, max);
//     }
//     return false

//   } else {

//   }

// }

module.exports = validate;
