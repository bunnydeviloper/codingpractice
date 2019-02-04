// write a class for a doubly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

function getNodeValuesHeadToTail (ll) {
  const values = [];
  let node = ll.head;
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

function getNodeValuesTailToHead (ll) {
  const values = [];
  let node = ll.tail;
  while (node !== null) {
    values.push(node.value);
    node = node.prev;
  }
  return values;
}

function removeMultipleNodes (ll, nodes) {
  for (const node of nodes) {
    ll.remove(node);
  }
}

// ------------------- DOUBLY LINKED LIST CONSTRUCTOR -----------------

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) { // empty ll
      this.head = node;
      this.tail = node;
    } else {
      insertBefore(this.head, node);
    }
    return this;
  }

  setTail(node) {
    if (this.tail === null) { // empty ll
      this.tail = node;
      this.head = node;
    } else {
      insertAfter(this.tail, node);
    }
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert); // in case nodeToInsert already in ll
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;

    return this;
  }

  insertAfter(node, nodeToInsert) {
    //
  }

  insertAtPosition(position, nodeToInsert) {
    //
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next; // increment for next while loop iteration
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
    return this;
  }

  remove(node) {
    if (node === this.head) { // if node_to_remove is head
      this.head = node.next;
    } else if (node === this.tail) { // if node_to_remove is tail
      this.tail = node.prev;
    }
    this.removeNodeBindings(node); // if node_to_remove is in middle
    return this;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return (node !== null);
  }
}

const emptyLL = new DoublyLinkedList();
console.log(emptyLL);

const oneNodeLL = new DoublyLinkedList();
const nine = new Node(9);
oneNodeLL.head = nine;
oneNodeLL.tail = nine;
// console.log(oneNodeLL);

const five = new Node(5);
const four = new Node(4);
const three = new Node(3);
const two = new Node(2);
const one = new Node(1);

const twoNodeLL = new DoublyLinkedList();
twoNodeLL.head = two;
twoNodeLL.head.next = one;
twoNodeLL.tail = one;
twoNodeLL.tail.prev = two;
// console.log(twoNodeLL);

// Set up a simple LL: null <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> null
one.prev = null; one.next = two;
two.prev = one; two.next = three;
three.prev = two; three.next = four;
four.prev = three; four.next = five;
five.prev = four; five.next = null;

const simpleLL = new DoublyLinkedList();
simpleLL.head = one; simpleLL.tail = five;
// console.dir(simpleLL, { depth: null });

// ---------- TESTS ------------
console.log(simpleLL.containsNodeWithValue(8)); // false
console.log(simpleLL.containsNodeWithValue(5)); // true

simpleLL.remove(one).remove(five).remove(three);
console.dir(simpleLL, { depth: null });

simpleLL.head = one; simpleLL.tail = five;
one.prev = null; one.next = two;
two.prev = one; two.next = three;
three.prev = two; three.next = four;
four.prev = three; four.next = five;
five.prev = four; five.next = null;
simpleLL.removeNodesWithValue(3).removeNodesWithValue(1);
// console.dir(simpleLL, { depth: null });
console.log('after removal',
  getNodeValuesHeadToTail(simpleLL),
  getNodeValuesTailToHead(simpleLL),
);

simpleLL.insertBefore(two, new Node(7));
simpleLL.insertBefore(five, new Node(8));
// console.dir(simpleLL, { depth: null });
console.log('insert 7 and 8: ',
  getNodeValuesHeadToTail(simpleLL),
  getNodeValuesTailToHead(simpleLL),
);

