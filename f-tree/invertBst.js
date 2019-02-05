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

// ------------------ INVERT A BST -------------------

function swapLeftAndRightChild(tree) {
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}

// TIME: O(n) | SPACE: O(depth_of_tree)
function invertBst (tree) {
  if (tree === null) return;
  swapLeftAndRightChild(tree);
  invertBst(tree.left);
  invertBst(tree.right);
  return tree;
}

// TIME: O(n) | SPACE: O(n)
function invertBstIterative (tree) {
  const queue = [tree];

  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;

    swapLeftAndRightChild(current);
    queue.push(current.left);
    queue.push(current.right);
  }

  return tree;
}

const testResult = invertBst(myTree.root);
console.dir(testResult, {depth: null});
console.log('----------------------------------------')
const testAgain = invertBstIterative(testResult);
console.dir(testAgain, {depth: null});
