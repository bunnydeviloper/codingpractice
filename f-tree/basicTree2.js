// create a constructor fn for Node with parent and children properties
function Node(value) {
  this.value = value;
  this.parent = null;
  this.children = [];
}

// create a constructor fn for Tree using the Node above
function Tree(value) {
  const node = new Node(data);
  this.root = node;
}

const myTree = new Tree('Learn');
console.log(myTree);
