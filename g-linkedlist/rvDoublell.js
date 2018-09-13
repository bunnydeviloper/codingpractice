function DoubleLL () {
  this.head = null;
}

function Node (value, prev = null, next = null) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

const mydll = new DoubleLL();
const firstNode = mydll.head = new Node(1, null, secondNode);
const secondNode = new Node(2, firstNode);
console.dir(mydll, {depth: null});
