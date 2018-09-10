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

Tree.prototype.traverseDFS = function (cb) {
  // use IIFE to recursively traverse down the tree
  (function recurse(currentNode) {
    for (let i=0, len = currentNode.children.length; i<len; i++) {
      recurse(currentNode.children[i]);
    }
    cb(currentNode);
  })(this.root);
}

const DFStree = new Tree('root');
DFStree.root.children.push(new Node('child1 of root'));
DFStree.root.children[0].parent = DFStree.root;

DFStree.root.children[0].children.push(new Node('baby1 of child1'));
DFStree.root.children[0].children[0].parent = DFStree.root.children[0];

DFStree.root.children[0].children.push(new Node('baby2 of child1'));
DFStree.root.children[0].children[1].parent = DFStree.root.children[0];

DFStree.root.children.push(new Node('child2 of root'));
DFStree.root.children[1].parent = DFStree.root;

// console.log(DFStree);
console.dir(DFStree, {depth: null});

DFStree.traverseDFS(s => console.log(s.value));