const Node = require('./node');
const validate = require('./index');

test('Validate recognizes a valid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

// test('Validate recognizes an invalid and complex BST', () => {
//   const n = new Node(10);
//   n.insert(5);
//   n.insert(15);
//   n.insert(0);
//   n.insert(20);

  // n.left.right = new Node(1);
  // n.right.left = new Node(17);
//   n.right.right.right = new Node(19);

//   expect(validate(n)).toEqual(false);
// });