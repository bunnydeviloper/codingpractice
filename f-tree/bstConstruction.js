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

  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space
  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else { // when value === this.value
      if (this.left !== null && this.right !== null) {
        // replace current value with the min value
        this.value = this.right.getMinValue();
        // remove the minValue node
        this.right.remove(this.value, this);
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          this.value = null;
        }
      } else if (parent.left === this) {
        parent.left = (this.left !== null) ? this.left : this.right;
      } else if (parent.right === this) {
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
console.dir(myTree, { depth: null });

console.log(myTree.contains(30)); // false
console.log(myTree.contains(15)); // true

console.log(myTree.getMinValue()); // 2

console.log(myTree.remove(30)); // doesn't remove anything
console.log(myTree.remove(15));
