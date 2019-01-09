// Trie data structure

function Node (data) {
  this.data = data;
  this.isWord = false;
  this.children = {};
  // this.prefixes = 0;
};

function Trie () {
  this.root = new Node(''); // initialize tree with empty root node
}

Trie.prototype.add = function (word) {
  // caution check if the root exists
  if (!this.root) {
    return null;

    // this.root = new Node('');
    // return this._addNode(this.root, word);
  }
  this._addNode(this.root, word); // define below
};

Trie.prototype._addNode = function (currRootNode, word) {
  // step 1: check if word or node exists
  if (!currRootNode || !word) {
    return null;
  }
  // step 2: extract first letter, add to children of current node
  // currRootNode.prefixes++;
  const letter = word.charAt(0);
  let child = currRootNode.children[letter];

  if (!child) {
    child = new Node(letter);
    currRootNode.children[letter] = child;
  }

  // step 3: extract remainder, if done adding => change isWord to True, else recurse until the end
  const remainder = word.substring(1);
  if (!remainder) {
    child.isWord = true;
  }
  this._addNode(child, remainder);
};

const myTrie = new Trie();
myTrie.add('sync');
console.log(myTrie);
console.log(JSON.stringify(myTrie, null, 4));
myTrie.add('seafood');
console.log(myTrie.root.children); // 'y' and 'e' should be children of 's' ('s' is child of root


