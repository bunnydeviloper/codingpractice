// given a singly linked list and two nodes with value
// sway the position of the two nodes

const g = null;
const f = {data: 14, next: g};
const e = {data: 20, next: f};
const d = {data: 13, next: e};
const c = {data: 12, next: d};
const b = {data: 15, next: c};
const a = {data: 10, next: b};

const myList = { head: a};

// const nested = {
//   data: 13, next: { data: 20, next: { data: 14, next: null, }, },
// };
// const myList = { head: { data: 10, next: {
//       data: 15, next: { data: 12, next: nested, }, }, },
// };

console.log('Original list: \n');
console.dir(myList, { depth: null });

// corner cases to consider:
// 1. x and y may not be adjacent
// 2. either x or y can be a head/last node
// 3. x and/or y may not be present in linked list.

function swapNodes (list, x, y) {
  // first, make sure x and y are in the LL, else return exit
  if (x === y) return;

  // second, search for position of x and y, keep track of curr & prev pointers
  let head = list.head;
  let prevX = null;
  let currX = head;
  while (currX !== null && currX.data !== x) {
    prevX = currX;
    currX = currX.next;
  }

  let prevY = null;
  let currY = head;
  while (currY !== null && currY.data !== y) {
    prevY = currY;
    currY = currY.next;
  }

  // If either x or y is not present, nothing to do
  if (currX === null || currY === null) return;

  // third, change next of prev pointers
  if (prevX !== null) prevX.next = currY; // if X is not head of list
  else head = currY; // else make Y the new head

  if (prevY !== null) prevY.next = currX; // if Y is not head of list
  else head = currX; // make X the new head

  // fourth, change next of curr pointers
  let temp = currX.next;
  currX.next = currY.next;
  currY.next = temp;

  return head;
}

const result = swapNodes(myList, 10, 20);
console.log('After swapping: \n');
console.dir(result, { depth: null });

