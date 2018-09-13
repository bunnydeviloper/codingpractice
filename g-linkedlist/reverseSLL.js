// constructor function for Linked List
function LinkedList() {
  this.head = null;
}

// constructor function for Node
function Node (value, next = null) {
  this.value = value;
  this.next = next;
}

// function to reverse a singly linked list
function reverseSLL (sll) {
  // if the linkedlist doesnt have any element, or just one head, return the same linkedlist
  if (!sll.head || !sll.head.next) return sll;

  // else, keep reversing pointers of two nodes at a time
  // let curr = sll.head;
  let prev = new LinkedList();
  // let prev = sll.head;
  let curr = prev.next;

  while (curr) {
    let temp = curr.next; // save the next node
    curr.next = prev; // reverse pointer
    prev = curr; // increment previous to current node
    curr = temp; // increment current to the saved node above and repeat (or null if at the end)
  }
  sll.head = prev;
  return sll;
}

const mysll = new LinkedList();
mysll.head = new Node(1, new Node(2, new Node(3)));
console.dir(mysll, {depth: null});

reverseSLL(mysll);
console.dir(mysll, {depth: null});
