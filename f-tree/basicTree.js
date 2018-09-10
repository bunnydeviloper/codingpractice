// create a constructor function for a tree
function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const myTree = new Node('Learn', new Node('JavaScript', null, null), new Node('and', new Node('Data',
  null, null), new Node('Structure', null, null)));

console.log(myTree);

// create a function that walks the tree from top to bottom, left to right (DFS?)
function walk(tree, fn) {
  if (tree) {
    fn(tree.value);
    walk(tree.left, fn);
    walk(tree.right, fn);
  }
}

walk(myTree, s => console.log(s)); // Learn JavaScript and Data Structure
