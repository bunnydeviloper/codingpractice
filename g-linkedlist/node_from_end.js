// constructor fn for singly link list
function LinkedList () {
  this.head = null;
}
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

const mysll = new LinkedList(); // Linked List with 5 nodes
mysll.head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
// console.dir(mysll, {depth: null});

const mysll2 = new LinkedList(); // LinkedList with 0 node

const mysll3 = new LinkedList(); // LinkedList with only 1 node
mysll3.head = new Node(1);

// Instruction: write a function nth_node_from_end that takes teh head of a singly linked list
// and a number n, and returns the nth node from the end of the linked list
// Eg: 1 => 2 => 3 => 4 => 5, head is the first node, n = 2, fn should return node with value 4

function nth_node_from_end (ll, n) {
  let current;
  let nthNode;

  if (ll.head) {
    current = ll.head;

    if (current.next && current.next.next) { // only works for n = 2 for now...
      nthNode = current.next.next;

      while (nthNode.next.next) {
        current = current.next;
        nthNode = nthNode.next;
      }

      return nthNode;

    } else return "Linked List only has one head node";
  } else return "Invalid Linked List";
}

console.log(nth_node_from_end(mysll2)); // "Invalid Linked List"
console.log(nth_node_from_end(mysll3)); // "Linked List has only 1 head node"
console.log(nth_node_from_end(mysll)); // Node {value: 4, next: Node {value: 5, next: null}}
