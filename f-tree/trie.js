// Trie data structure

const Node = (data) => {
  this.data = data;
  this.isWord = false;
  this.children = {};
  // this.prefixes = 0;
};

function Trie () {
  this.root = new Node(''); // initialize tree with empty root node
}

Trie.prototype.add = function (word) {
  // step 1: caution check if the root exists
  if (!this.root) {
    return null;
  }
  this._addNode(this.root, word); // define below
};

Trie.prototype._addNode = function (rootNode, word) {
  //
};
