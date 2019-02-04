class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
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
console.log(myTree, { depth: null });

myTree.remove(2).remove(1).remove(5);
myTree.insert(12).insert(14).insert(5); // tree w/ only right br
