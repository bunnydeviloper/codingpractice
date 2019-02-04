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
    //
  }

  insertAfter(node, nodeToInsert) {
    //
  }

  insertAtPosition(position, nodeToInsert) {
    //
  }

  removeNodesWithValue(value) {
    //
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
    } else if (node === this.tail) {
      this.tail = node.prev;
    }
    this.removeNodeBindings(node);
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

