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

  // AVERAGE: O(log(n)) time | O(1) space
  // WORST: O(n) time | O(1) space (b/c not using call stack recursion)
  remove(value, parent = null) {
    let currentNode = this;

    while (currentNode !== null) {
      // S1: search for node_to_remove
      if (value < currentNode.value) { // search left subtree
        parent = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) { // search right subtree
        parent = currentNode;
        currentNode = currentNode.right;

      // S2: once found, remove the node and shift the rest accordingly
      } else {
        // case 1: if node_to_remove has both left & right subtree
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);

        // case 2: if node_to_remove has left || right || none subtree
        } else {
          // subcase 1: if node_to_remove is root w/o parent
          if (parent === null) {
            if (currentNode.left !== null) {
              currentNode.value = currentNode.left.value;
              currentNode.right = currentNode.left.right;
              currentNode.left = currentNode.left.left;
            } else if (currentNode.right !== null) {
              currentNode.value = currentNode.right.value;
              currentNode.left = currentNode.right.left;
              currentNode.right = currentNode.right.right;
            } else {
              currentNode.value = null;
            }

          // subcase 2: if node_to_remove is middle/end of the tree
          } else if (parent.left === currentNode) {
            parent.left = (currentNode.left !== null)
              ? currentNode.left : currentNode.right;
          } else if (parent.right === currentNode) {
            parent.right = (currentNode.left !== null)
              ? currentNode.left : currentNode.right;
          }
          break; // finished removing, break out of while loop
        }
      }
    }

    return this; // return tree, since currentNode has been removed
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

myTree.remove(2).remove(1).remove(5);
console.log(myTree); // should have only one node for 10
console.log(myTree.contains(2)); // false

myTree.insert(12).insert(14).insert(11); // tree w/ only right br
console.dir(myTree, { depth: null });
myTree.remove(10);
console.dir(myTree, { depth: null });
