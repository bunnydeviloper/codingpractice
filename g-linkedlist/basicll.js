// implement stack and queue with JavaScript
// Stack: Last In First Out (LIFO)
const myStack = [];
myStack.push(3);
myStack.push(2);
myStack.pop();

// Queue: First In First Out (FIFO)
const myQueue = [];
myQueue.push(4);
myQueue.push(1);
myQueue.shift();

// implement singly linked list
function SinglyLL() {
  this.head = null;
}

// constructor function for a new Node
function Node(value, next) {
  this.value = value;
  this.next = next;
}

// add a node to the end (tail) of a singly linked list
SinglyLL.prototype.addToTail = function (value) {
  // first, find out if there's a head, if there's no head, then the new node will be the head
  if (!this.head) {
    this.head = new Node(value, null);
  } else {
    // else, change the current node to the next node, walk through the chain until you reach the tail
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // when you finished walking the chain, assign the node as the last item in the LL
    current.next = new Node(value, null);
  }
};

// test case for adding a node to the tail of a singly linked list
const mysll = new SinglyLL()
mysll.addToTail('first one');
mysll.addToTail('second one');
mysll.addToTail('third one');
console.dir(mysll, {depth: null});

// add a node to the head of a singly linked list
SinglyLL.prototype.addToHead = function(value) {
  this.head = new Node(value, this.head);
};

mysll.addToHead('before first');
mysll.addToHead('originate');
console.dir(mysll, {depth: null});

// remove a node from a singly linked list (note: there's no previous node)
// note: to "remove" means drop the pointer reference to the node
SinglyLL.prototype.remove = function(value) {
  let current = this.head;

  // find the node we need to remove by comparing the value of current node with value-to-remove
  if (current.value === value) {
    // case1: head is the node we're looking for, simply change the head to the next one
    this.head = current.next;
  // if (this.head.value === value) {
    // this.head = this.head.next;
  } else if {
    let previous = current;

    // case2: if the node is somewhere in middle, you have to go through each node to find it
    while (current.next) {
      if (current.value === value) { // base case: found the node
        previous.next = current.next; // remove the "pointer"
        break; // break out of while loop
      }
      // haven't found yet, keep looping through the list
      previous = current;
      current = current.next;
    }

    // case3: we've reached the tail now, the node before current node will have .next = null
    if (current.value === value) {
      previous.next = null;
    }
  } else {
    console.log('Cannot find node in the linked list!');
  }
};

mysll.remove('test test, should send back error');
mysll.remove('third one');
console.dir(mysll, {depth: null});
