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

// console.log('ORIGINAL TREE: \n', myTree);


// Serialize a tree: convert tree to string
function serialize (tree) {
  if (!tree.root) return 'Invalid tree'; // precaution check

  // serializer function return and array so we need to convert it to string
  else {
    let result = [];
    serializer(tree.root, result);
    return result.join(',');
  }
}

function serializer (node, result) {
  // base case: if node doesn't exist, we push # to result array and exit recursion
  if (!node) {
    result.push('#');
    return;
  }

  // push the value of current node
  result.push(node.value);

  // recursively call fn serialier for left branch and right branch
  serializer(node.left, result);
  serializer(node.right, result);
}

console.log('//////////////// Test Serialize ///////////////');

const serializedResult = serialize(myTree);
console.log(serializedResult); // '3, 2, 1, #, #, #, 4, #, #'
console.log('\nTest a single node: ', serialize(rightNode)); // 'Invalid tree'

console.log('\n//////////////// Test Deserialize ///////////////');

// Deserialize a tree: convert string to tree
function deserialize (string) {
  if (string.length <= 0) return 'Invalid input string';

  else {
    let data = string.split(',');
    let currentIndex = 0;

    function deserializer(data) {
      // if index is out of bound or if current data array value is '#', exit
      if (currentIndex > data.length || data[currentIndex] === '#') return null;

      // else make a new node with associated value
      const node = new Node(data[currentIndex], null, null);

      // increase index and repeat process
      currentIndex++; // odd index, go left
      node.left = deserializer(data, currentIndex);
      currentIndex++; // even index, go right
      node.right = deserializer(data, currentIndex);

      return node;
    }
    return new Tree(deserializer(data));
  }
}

const deserializedResult = deserialize(serializedResult);
console.dir(deserializedResult, { depth: null }); // should output 'myTree'
console.log('\nTest empty string: ', deserialize('')); // 'Invalid input string'
