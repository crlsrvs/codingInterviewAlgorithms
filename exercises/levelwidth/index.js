// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
//       /  \
//      3    1
//           |
//           2

// Answer: [1, 3, 2, 2, 1]

function levelWidth(root) {
  const widthPerLevel =  [1];
  let currentChildren = root.children;

  if (currentChildren.length === 0) {
    return widthPerLevel;
  }

  while (currentChildren.length !== 0) {
    widthPerLevel.push(currentChildren.length);
    
    const nextChildren = [];

    currentChildren.forEach(node => {
      if (node.children.length !== 0) {
        nextChildren.push(...node.children);
      }
    });

    currentChildren = nextChildren;
  }

  return widthPerLevel;
}

module.exports = levelWidth;
