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
    //
  }

  setTail(node) {
    //
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
    //
  }

  containsNodeWithValue(value) {
    //
  }
}
