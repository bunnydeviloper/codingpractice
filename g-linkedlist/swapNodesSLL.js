// given a singly linked list and two nodes with value
// sway the position of the two nodes

const nested = {
  data: 13, next: { data: 20, next: { data: 14, next: null, }, },
};
const myList = { head: { data: 10, next: {
      data: 15, next: { data: 12, next: nested, }, }, },
};

console.log('Original list: \n');
console.dir(myList, { depth: null });

function swapNodes (list, x, y) {
  return list;
}

const result = swapNodes(myList, 10, 20);
console.log('After swapping: \n');
console.dir(myList, { depth: null });

