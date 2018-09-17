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
  const newNode = new Node(value);
  if (!this.root) return this.root = newNode;

  let current = this.root;
  while(current) {
    if (value < current.value) {
      if (!current.left) current.left = newNode;
      else current = current.left;
    } else {
      if (!current.right) current.right = newNode;
      else current = current.right;
    }
  }
}

const testBst = new BST();
testBst.push(4);
testBst.push(2);
testBst.push(9);
testBst.push(7);
testBst.push(5);
testBst.push(0);
console.dir(testBst, {depth: null});
