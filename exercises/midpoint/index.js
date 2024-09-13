// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  const listIsEmpty = list.head === null;
  const onlyOne = list.head.next === null;

  if (listIsEmpty || onlyOne) {
    return list.head
  }

  let slow = list.head;
  let fast = list.head;

  while (true) {
    let next1 =  fast.next;
    let next2 = next1 && next1.next;

    if (!next1 || !next2) {
      return slow;
    }

    slow = slow.next;
    fast = next2;
  }
}

module.exports = midpoint;
