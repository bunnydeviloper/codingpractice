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
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    } else { // when value === this.value
      return this;
    }
    return this;
  }

  contains(value) {
    //
    return true/false;
  }

  remove(value) {
    return this;
  }
}

const myTree = new BST(10);
myTree.insert(10).insert(5).insert(15).insert(5).insert(2).insert(14).insert(22);
console.dir(myTree, { depth: null });
