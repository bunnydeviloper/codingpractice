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

  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  remove(value) {
    return this;
  }

  getMinValue() {
    if (this.left === null) return this.value;
    else return this.left.getMinValue();
  }
}

const myTree = new BST(10);
myTree.insert(10).insert(5).insert(15).insert(5).insert(2).insert(14).insert(22);
console.dir(myTree, { depth: null });

console.log(myTree.contains(30)); // false
console.log(myTree.contains(15)); // true

console.log(myTree.getMinValue()); // 2
