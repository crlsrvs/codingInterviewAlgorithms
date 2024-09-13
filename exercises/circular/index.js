// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  const listIsEmpty = list.head === null;
  const onlyOne = list.head.next === null;

  if (listIsEmpty || onlyOne) {
    return list.head
  }

  let slow = list.head;
  let fast = list.head;

  while (true) {
    let fastStep1 =  fast.next;
    let fastStep2 = fastStep1 && fastStep1.next;

    if (!fastStep1 || !fastStep2) {
      return false;
    }

    if (slow.data === fastStep2.data) {
      return true;
    }

    slow = slow.next;
    fast = fastStep2;
  }
}

module.exports = circular;
