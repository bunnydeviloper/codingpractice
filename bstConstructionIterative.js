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

  // AVERAGE: O(log(n)) time | O(1) space
  // WORST: O(n) time | O(1) space (b/c not using call stack recursion)
  contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left; // search on left subtree
      } else if (value > currentNode.value) {
        currentNode = currentNode.right; // search on right subtree
      } else { // found the value
        return true;
      }
    }
    return false;
  }

  remove(value, parent = null) {
    let currentNode = this;

  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

const myTree = new BST(10);
myTree.insert(5).insert(2).insert(10).insert(1); // tree w/ only left br
console.dir(myTree, { depth: null });

console.log(myTree.contains(5)); // true
console.log(myTree.contains(8)); // false

console.log(myTree.getMinValue()); // 1

// myTree.remove(2).remove(1).remove(5);
// myTree.insert(12).insert(14).insert(5); // tree w/ only right br
