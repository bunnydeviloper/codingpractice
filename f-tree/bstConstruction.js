class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value); // insert the new node
      } else {
        this.left.insert(value); // recurse on the left side
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BST(value); // insert the new node
      } else {
        this.right.insert(value); // recurse on the right side
      }
    } else { // when value === this.value
      return this; // duplicate values, no insert
    }
    return this;
  }

  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value); // recurse on left
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value); // recurse on right
      }
    } else { // when value === this.value
      return true; // found the value
    }
  }

  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space
  remove(value, parent = null) {
    // S1: first find the node contains the value you want to remove
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this); // parent node is the root
      } // else: value out of bound, return tree
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this); // parent node is the root
      } // else: value out of bound, return tree

    // S2: once found, execute the removal
    } else { // when value === this.value
      if (this.left !== null && this.right !== null) {
        // replace current value with the min value from right subtree
        this.value = this.right.getMinValue();
        // remove the minValue node (this.value is now minValue)
        this.right.remove(this.value, this);

      // when we only have one child node, or no children nodes
      // Case 1: when node_to_remove (curr) is the root node of the tree
      } else if (parent === null) {
        if (this.left !== null) { // root has only left subtree
          // remove the root node by reassigning all left substree info
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left; // re-assign last, avoid overwrite
        } else if (this.right !== null) { // root has only right subtree
          // remove the root node by reassigning all right substree info
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right; // assign last, avoid overwrite
        } else { // root has no children nodes
          this.value = null;
        }

      // Case 2: when node_to_remove (curr) is in the middle of the tree
      } else if (parent.left === this) { // if left child = currNode
        // remove currNode by pointing left child to currNode's child
        parent.left = (this.left !== null) ? this.left : this.right;
      } else if (parent.right === this) { // if right child = currNode
        // remove currNode by pointing right child to currNode's child
        parent.right = (this.left !== null) ? this.left : this.right;
      }
    }

    return this;
  }

  getMinValue() {
    if (this.left === null) return this.value;
    else return this.left.getMinValue();
  }
}

const myTree = new BST(10);
myTree.insert(10).insert(5).insert(15).insert(5).insert(2).insert(14).insert(22);
console.dir(myTree, { depth: null }); // no dups value

console.log(myTree.contains(30)); // false
console.log(myTree.contains(15)); // true

console.log(myTree.getMinValue()); // 2

console.log(myTree.remove(30)); // don't do anything
console.log(myTree.remove(15));

const oneNodeTree = new BST(1);
console.log(oneNodeTree.remove(5)); // don't do anything
console.log(oneNodeTree.remove(1)); // return empty
