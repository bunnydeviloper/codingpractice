class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value > this.value) {
      //
    } else if (value < this.value) {
      //
    }
    return this;
  }

  contains(value) {
    //
  }

  remove(value) {
    return this;
  }
}

const myTree = new BST(10);
myTree.insert(2);
console.log(myTree);
