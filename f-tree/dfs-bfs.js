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
}

testTree.traverseBFS(s => console.log(s.value));
