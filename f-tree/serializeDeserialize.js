function Tree (node) {
  this.root = node;
}

// construct a binary tree to test
function Node (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const leftNode = new Node(2, new Node(1, null, null), null);
const rightNode = new Node(4, null, null);
const rootNode = new Node(3, leftNode, rightNode);
const myTree = new Tree(rootNode);

console.log('ORIGINAL TREE: \n', myTree);


// Serialize a tree: convert tree to string
function serialize (tree) {
  if (!tree.root) return 'Invalid tree'; // precaution check

  // serializer function return and array so we need to convert it to string
  else {
  let result = [];
  result = serializer(tree.root, result);
  console.log(result);
  }
  // return serializer(tree.root).join('');
}

function serializer (node, result) {
  // base case: if no more nodes, return result array
  if (!node) {
    result.push('#');
    // console.log(result);
    return; // result;
  }

  // push the value of current node
  result.push(node.value);

  // recursively call fn serialier for left branch and right branch
  serializer(node.left, result);
  serializer(node.right, result);
}

const serializeResult = serialize(myTree);
console.log(serializeResult); // '3, 2, 1, #, #, #, 4, #, #'


// Deserialize a tree: convert string to tree
