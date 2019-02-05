function Node (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const three = { value: 3, left: new Node(6), right: new Node(7) };
const four = { value: 4, left: new Node(8), right: new Node(9) };
const two = { value: 2, left: four, right: new Node(5) };
const one = { value: 1, left: two, right: three };
const myTree = { root: one };

// console.dir(myTree, { depth: null });
