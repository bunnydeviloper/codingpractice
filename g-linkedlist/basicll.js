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
function singlyLL() {
  this.head = null;
}

// add a node to a singly linked list
singlyLL.prototype.push = function (value) {
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


// implement double linked list
