// Node constructor for Binary Search Tree
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Root constructor for Binary Search Tree
function BST() {
  this.root = null;
}

// Insert a value into the BTS
// note: BST characteristics: every node on the left is smaller than the value of the node
// and the value on the right is higher than the value of the root
BST.prototype.push = function(value) {
  const root = this.root;
}
