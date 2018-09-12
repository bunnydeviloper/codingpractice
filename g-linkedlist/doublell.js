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

DoubleLL.prototype.push = function(value) {
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

// test the push method
const mydll = new DoubleLL();
