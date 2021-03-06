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
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

// add a node to the end (tail) of a singly linked list
SinglyLL.prototype.addToTail = function (value) {
  // first, find out if there's a head, if there's no head, then the new node will be the head
  if (!this.head) {
    // this.head = new Node(value, null);
    this.head = new Node(value);
  } else {
    // else, change the current node to the next node, walk through the chain until you reach the tail
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // when you finished walking the chain, assign the node as the last item in the LL
    // current.next = new Node(value, null);
    current.next = new Node(value);
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
mysll.addToHead('origin');
console.dir(mysll, {depth: null});

// find the size of the linked list
SinglyLL.prototype.size = function() {
  let current = this.head;
  let counter = 0;
  while(current.next) {
    counter++;
    current = current.next;
  }
  return counter;
};

console.log('Size of mysll is: ', mysll.size()); // Size of mysll is: 4

// get the value from the head of a linked list
SinglyLL.prototype.getHead = function() {
  return this.head.value || null;
};
console.log('The head is: ', mysll.getHead()); // The head is: origin

// get the value from the tail of a linked list
SinglyLL.prototype.getTail = function() {
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  return current.value;
};
console.log('The tail is: ', mysll.getTail()); // The tail is: third one

// clear the linked list completely
SinglyLL.prototype.clear = function() { this.head = null; };

// remove the first node (head) from a linked list
SinglyLL.prototype.removeFirst = function() {
  let value = this.head.value || null;
  this.head = this.head.next;
  return value;
};
console.log(mysll.removeFirst()); // origin
mysll.addToHead('add origin after remove');

// remove the last node (tail) from a linked list
SinglyLL.prototype.removeLast = function() {
  let current = this.head;
  let previous;
  while (current.next) {
    previous = current;
    current = current.next;
  }
  let value = previous.next.value || null;
  previous.next = null;
  return value;
};
console.log(mysll.removeLast());
mysll.addToTail('add third one after remove');
console.dir(mysll, {depth: null});

// get value at a particular index
SinglyLL.prototype.getValue = function(index) {
  let counter = 0;
  let current = this.head;
  while (counter != index){
    current = current.next;
    counter++;
  }
  return current.value;
};
console.log('Linked list index 2: ', mysll.getValue(2)); // Linked list index 2: first one

// remove node at a particular index
SinglyLL.prototype.removeAt = function(index) {
  let counter = 0;
  let current = this.head;
  let previous;
  while (counter != index) {
    previous = current;
    current = current.next;
    counter++;
  }
  previous.next = current.next;
};

mysll.removeAt(2);

// insert node at a particular index
SinglyLL.prototype.insertAt = function(index, value) {
  let counter = 0;
  let current = this.head;
  while (counter != index-1) { // if you dont wann use index-1, declare a 'previous' var
    current = current.next;
    counter++;
  }
  current.next = new Node(value, current.next);
};
mysll.insertAt(2, 'insert first one again');
console.dir(mysll, {depth: null});

// search for a node to see if it exist in the linked list
SinglyLL.prototype.search = function(value) {
  let current = this.head;
  while (current) {
    // if (current.value === value) return current;
    if (current.value === value) return true;
    current = current.next;
  }
  // return null;
  return false;
};
console.log(mysll.search('first one')); // false
console.log(mysll.search('second one')); // true


/* --------- Advance --------- */

// remove a node from a singly linked list (note: there's no previous node)
// note: to "remove" means drop the pointer reference to the node
SinglyLL.prototype.remove = function(value) {
  let current = this.head;

  // find the node we need to remove by comparing the value of current node with value-to-remove
  if (current.value === value) {
    // case1: head is the node we're looking for, simply change the head to the next one
    this.head = current.next;
    console.log('Found it, node is at the head of LL');
  } else {
    let previous = current;

    // case2: if the node is somewhere from the middle till the end
    while (current) {
      if (current.value === value) {
        if (current.next != null) { // if not the end
          console.log('Found it, node is somewhere in the middle of LL');
          break; // break out of while loop
        } else {
          console.log('Found it, node is at the tail of LL');
          break; // break out of while loop
        }
      }
      // haven't found yet, keep looping through the list
      previous = current;
      current = current.next;
    }
    if (current === null) return console.log('Reached the end, cannot find node in linked list!');
    // we have found the node, now remove the pointer
    previous.next = current.next;
  }
};

mysll.remove('add origin after remove'); // remove Head
mysll.remove('second one'); // remove middle
mysll.remove('add third one after remove'); // remove Tail
mysll.remove('test test, should send back error');
console.dir(mysll, {depth: null});
