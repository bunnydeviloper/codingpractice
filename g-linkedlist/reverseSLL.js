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
  let prev = sll.head;
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


const mysll2 = new LinkedList();
mysll2.head = new Node(4, new Node(5, new Node(6)));
console.dir(mysll2, {depth: null});

// reverse a linked list with array
function reverseSLLArray (sll) {
  if (!sll.head || !sll.head.next) return sll;

  let nodes = [];
  current = sll.head;
  while (current) {
    // store all nodes into an array
    nodes.push(current);
    current = current.next;
  }

  const newLL = new LinkedList();
  newLL.head = nodes.pop(); // make the last item in the nodes array to be the head
  current = newLL.head;
  let node = nodes.pop();
  while (node) {
    node.next = null; // to ensure the last node of newLL to be null
    current.next = node;

    current = current.next;
    node = nodes.pop();
  }
  console.log('this is new LL ', newLL); // this is correct, but console.dir  is not right...
  // console.dir(newLL, {depth: null});
  return newLL;
}
reverseSLLArray(mysll2);
console.dir(mysll2, {depth: null}); // ??? not sure why it's not working
