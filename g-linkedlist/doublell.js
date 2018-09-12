// implement double linked list
function DoubleLL() {
  this.head = null;
  // this.tail = null;
}

// define a constructor for node
function Node (value, prev, next) {
  this.value = value;
  this.previous = prev;
  this.next = next;
}

// adding a node to the tail of double linked list
DoubleLL.prototype.addToTail = function(value) {
  // first define the initial node as the head, current, and previous
  let head = this.head;
  let current = head;
  let previous = head;

  // if the head does not exist, then you assign the new node to the head
  if (!head) {
    this.head = new Node(value, null, null);
  } else {
    // else, walk the linked list until you reach the end
    while (current && current.next) { // ???: do you nead to check if current exist?...
      // 1st: assign the current to be previous
      previous = current;
      // 2nd: assign the next node to the be current
      current = current.next;
    }
    current.next = new Node(value, current, null);
  }
};

// test the addToTail method
const mydll = new DoubleLL();
mydll.addToTail('first one');
mydll.addToTail('second one');
mydll.addToTail('third one');
console.dir(mydll, {depth: null});

// adding a node to the head of double linked list
DoubleLL.prototype.addToHead = function(value) {
  // if the head exist, then link the new node to be previous node of head
  if (this.head) this.head.previous = new Node(value, null, this.head);
  // if the head does not exist, then the head will be both head and tail
  // else this.tail = new Node(value, null, this.head);

  // change the new head to new node
  this.head = new Node(value, null, this.head);
};

// test the addToHead method
mydll.addToHead('head1 before 1st');
mydll.addToHead('head2 before head1');
console.dir(mydll, {depth: null});
