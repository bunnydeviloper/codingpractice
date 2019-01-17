// construct a binary tree to test
function Node (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const leftNode = new Node(2, new Node(1, null, null), null);
const rightNode = new Node(4, null, null);
const myTree = new Node(3, leftNode, rightNode);

console.log('ORIGINAL TREE: \n', myTree);


// Serialize a tree: convert tree to string
function serialize (tree) {
  // precaution check: if tree doesnt have root, return

  // if all is well, call serializer function with root of tree and result
}

function serializer (tree, result = []) {
  // base case: if no more nodes, return result array

  // push the value of current node

  // recursively call fn serialier for left branch and right branch

}

const serializeResult = serialize(myTree);
console.log(serializeResult); // '3, 2, 1, #, #, #, 4, #, #'


// Deserialize a tree: convert string to tree
