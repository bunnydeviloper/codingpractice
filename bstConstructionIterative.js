class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // AVERAGE: O(log(n)) time | O(1) space
  // WORST: O(n) time | O(1) space (b/c not using call stack recursion)
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new BST(value);
          break;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new BST(value);
          break;
        }
      } else { // value === currentNode.value
        break; // no add duplicate value
      }
    }
    return this;
  }

  contains(value) {
    return true;
  }

  remove(value, parent = null) {
    return this;
  }
}

const myTree = new BST(10);
myTree.insert(5).insert(2).insert(10).insert(1); // tree w/ only left br
console.dir(myTree, { depth: null });

// myTree.remove(2).remove(1).remove(5);
// myTree.insert(12).insert(14).insert(5); // tree w/ only right br
