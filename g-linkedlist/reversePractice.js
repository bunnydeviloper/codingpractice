// Reverse a singly linked list

const linkedlist = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

// const ll3 = {value: 3, next: null};
// const ll2 = {value: 2, next: ll3};
// const ll = {value: 1, next: ll2};
// console.log(ll);

console.log(linkedlist);

function reverse(head) {
  // step 1: initialize all variables
  let previous = null;
  let current = head;
  let follow = current;

  // step 2
  while (current !== null) {
    // keep track of the following so you don't lose pointer connection
    follow = current.next;

    current.next = previous;
    previous = current;
    current = follow;
  }

  // step 3
  console.log(previous);
  return previous;
}

reverse(linkedlist);
