// create a constructor function for a tree
function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const myTree = new Node('Learn', new Node('JavaScript', null, null), new Node('and', new Node('Data',
  null, null), new Node('Structure', null, null)));

console.log(myTree);

// create a function that walks the tree from top to bottom, left to right (BFS?)
function walk(tree, fn) {
  if (tree) {
    fn(tree.value);
    walk(tree.left, fn);
    walk(tree.right, fn);
  }
}

walk(myTree, s => console.log(s)); // Learn JavaScript and Data Structure

const anotherTree = new Node('root', new Node('child1 of root', new Node('baby1 of child1', null,
  null), new Node('baby2 of child1', null, null)), new Node('child2 of root', null, null));

console.log(anotherTree);
walk(anotherTree, s => console.log(s));
