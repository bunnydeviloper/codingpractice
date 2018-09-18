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
      if (!current.left) {
        current.left = newNode;
        break;
      } else current = current.left;
    } else {
      if (!current.right) {
        current.right = newNode;
        break;
      } else current = current.right;
    }
  }
}

const testBst = new BST();
testBst.push(4);
testBst.push(2);
testBst.push(9);
testBst.push(7);
testBst.push(1);
testBst.push(10);
testBst.push(5);
testBst.push(0);
// console.dir(testBst, {depth: null});

// Depth first search for BST ( pre-order traversal)
console.log('start dfs...');
function dfs(node) {
  if (node) {
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}
dfs(testBst.root); // 4 2 1 0 9 7 5 10

// Breadth first search from bottom for BST (post-order traversal)
console.log('starting postOrder...');
function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}
postOrder(testBst.root); // 0 1 2 5 7 10 9 4

// In order traversal for BST
console.log('starting inOrder...');
function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}
inOrder(testBst.root); // 0 1 2 4 5 7 9 10

// find min value in a bst, just recurse until you reach the left-most node
function minValue (node) {
  if (!node) return 0;
  if (node.left) {
    return minValue(node.left);
  }
  return node.value;
}
console.log('min Value is: ', minValue(testBst.root)); // 0

// find max value of bst, just recurse until you reach the right-most node
function maxValue (node) {
  if (!node) return 0;
  if (node.right) {
    return maxValue(node.right);
  }
  return node.value;
}
console.log('max Value is: ', maxValue(testBst.root)); // 10

// write a function to find out if a value present in BST or not
function is_present (value, node) {
  if (!node) return false;
  else if (node.value < value) return is_present(value, node.right);
  else if (node.value > value) return is_present(value, node.left);
  else return true;

  /*
  if (!node) {
    return false;
  } else if (node.value < value) {
    return is_present(value, node.right);
  } else if (node.value > value) {
    return is_present(value, node.left);
  } else {
    return true;
  }
  */
}

console.log(is_present(20, testBst.root)); // false
console.log(is_present(2, testBst.root)); // true
