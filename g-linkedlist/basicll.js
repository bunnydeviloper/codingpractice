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

// add a node to a singly linked list
SinglyLL.prototype.push = function (value) {
  // first, create a node with the provided value
  const node = {
    value: value,
    next: null
  };

  // second, find out if there's a head, if there's no head, then the new node will be the head
  if (!this.head) {
    this.head = node;
  } else {
    // else, change the current node to the next node, walk through the chain until you reach the tail
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // when you finished walking the chain, assign the node as the last item in the LL
    current.next = node;
  }
};

// test case for adding a node to singly linked list
const mysll = new SinglyLL()
mysll.push('first one');
mysll.push('second one');
mysll.push('third one');
console.dir(mysll, {depth: null});

// remove a node from a singly linked list (note: there's no previous node)
SinglyLL.prototype.remove = function(value) {
  let current = this.head;

  // case1: head is the node we're looking for, simply change the head to the next one
  if (current.value === value) {
    this.head = current.next;
  } else {
    let previous = current;

    // case2: if the node is in the tail, then after removal, the beforeTail.next will become null
    // case3: if the node is somewhere in middle, after removal, the middle.next will become current
  }
};
