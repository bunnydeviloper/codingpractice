// constructor fn for singly link list
function LinkedList () {
  this.head = null;
}
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

const mysll = new LinkedList();
mysll.head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))));
// console.dir(mysll, {depth: null});

// Instruction: write a function nth_node_from_end that takes teh head of a singly linked list
// and a number n, and returns the nth node from the end of the linked list
// Eg: 1 => 2 => 3 => 4 => 5, head is the first node, n = 2, fn should return node with value 4

function nth_node_from_end (ll, n) {
  // return node;
}
