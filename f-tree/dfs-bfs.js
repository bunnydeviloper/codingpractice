// create a constructor fn for Node with parent and children properties
function Node(value) {
  this.value = value;
  this.parent = null;
  this.children = [];
}

// create a constructor fn for Tree using the Node above
function Tree(value) {
  const node = new Node(value);
  this.root = node;
}

const myTree = new Tree('Learn');
console.log(myTree);
// Tree { root: Node { value: 'Learn', parent: null, children: [] } }

// Implement Depth-First Search
Tree.prototype.traverseDFS = function (cb) {
  // use IIFE to recursively traverse down the tree
  (function recurse(currentNode) {
    for (let i=0, len = currentNode.children.length; i<len; i++) {
      recurse(currentNode.children[i]);
    }
    cb(currentNode);
  })(this.root);
}

// create a tree with 2 childs, first child has 2 babies, second child doesn't have any babies
const testTree = new Tree('root');
testTree.root.children.push(new Node('child1 of root'));
testTree.root.children[0].parent = testTree.root;

testTree.root.children[0].children.push(new Node('baby1 of child1'));
testTree.root.children[0].children[0].parent = testTree.root.children[0];

testTree.root.children[0].children.push(new Node('baby2 of child1'));
testTree.root.children[0].children[1].parent = testTree.root.children[0];

testTree.root.children.push(new Node('child2 of root'));
testTree.root.children[1].parent = testTree.root;

/* Changed order, move all babies from child1 to child 2, to see order of execution for BFS
testTree.root.children.push(new Node('child2 of root'));
testTree.root.children[1].parent = testTree.root;

testTree.root.children[1].children.push(new Node('baby1 of child2'));
testTree.root.children[1].children[0].parent = testTree.root.children[1];

testTree.root.children[1].children.push(new Node('baby2 of child2'));
testTree.root.children[1].children[1].parent = testTree.root.children[1];
*/

// console.log(testTree);
console.dir(testTree, {depth: null});

testTree.traverseDFS(s => console.log(s.value));

// Implement Breath-First Search
Tree.prototype.traverseBFS = function(cb) {
  let queue = [];
  queue.unshift(this.root); // add root element to the beginning of the queue
  let currentTree = queue.shift(); // remove outer key of root element, just keep the value of root

  while(currentTree) {
    for (let i=0, len = currentTree.children.length; i<len; i++) {
      // add all children of current Tree to the queue (same depth level) (child1, child2)
      queue.unshift(currentTree.children[i]);
    }
    cb(currentTree);
    currentTree = queue.shift();
  }
};

testTree.traverseBFS(s => console.log(s.value));

// Define a method that enable us to apply cb to either traverseDFS or traverseBFS
Tree.prototype.contains = function(cb, traverseMethod) {
  traverseMethod.call(this, cb);
};

// Test contains method
function checkbaby1(s) {
  if (s.value === 'baby1 of child1') console.log('Found it');
}
testTree.contains(checkbaby1, testTree.traverseBFS);

// Define a method to add a node to a specific node
Tree.prototype.add = function(value, parentValue, traversal) {
  // initialize some variables
  let child = new Node(value);
  let parent = null;

  const cb = function(node) {
    if (node.value === parentValue) parent = node; // find a node based on parentValue
    // then reassign that node to be the parent of newly created 'child' Node above
  };
  this.contains(cb, traversal);

  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add node to a non-existent parent.');
  }
};

testTree.add('newborn1 girl of child2', 'child2 of root', testTree.traverseDFS);
testTree.add('newborn2 boy of baby1', 'baby1 of child1', testTree.traverseDFS);
console.dir(testTree, {depth: null});

// Define a method to remove a node and all of its children
Tree.prototyp.remove = function(value, parentValue, traversal) {
  let tree = this;
  let parent = null;
  let childToRemove = null;
  let index;

  const cb = function(node) {
    if (node.value === parentValue) parent = node;
  };
  this.contains(cb, traversal);

  if (parent) {
    index = parent.children.indexOf(value);
    if (index === -1) throw new Error('Node to remove does not exist.');
    else childToRemove = parent.children.splice(index, 1);
  } else {
    throw new Error('Parent does not exist');
  }
  return childToRemove;
};

testTree.remove('baby2 of child1', 'child1 of root', testTree.traversalBFS);
console.dir(testTree, {depth: null});
