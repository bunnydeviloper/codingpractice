const Trie = require('./trie-addAndSearch.js');

console.log('--------------------------------------');
const myTrie2 = new Trie();
myTrie2.add('sleep');
myTrie2.add('see');
console.log(JSON.stringify(myTrie2, null, 4));

console.log('--------------------------------------');

Trie.prototype.remove = funtion(word) {
  // remove a word from a trie
};

// reference: http://blog.benoitvallon.com/data-structures-in-javascript/the-trie-data-structure/
