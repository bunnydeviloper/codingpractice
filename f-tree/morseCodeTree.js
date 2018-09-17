function Tree () {
  this.root = null;
}
function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

// Morse Code Tree
// left branch of the tree
const H = new Node("H", new Node(5), new Node(4));
const V = new Node("V", null, new Node(3));
const S = new Node("S", H, V);
const U = new Node("U", new Node("F"), new Node(null, null, new Node(2)));
const I = new Node("I", S, U);

const R = new Node("R", new Node("L"), new Node(null, new Node("+")))
const W = new Node("W", new Node("P"), new Node("J", null, new Node(1)));
const A = new Node("A", R, W);
const E = new Node("E", I, A);

// right branch of the tree
const G = new Node("G", new Node("Z", new Node(7)), new Node("Q"));
const O = new Node("O", new Node(null, new Node(8)), new Node(null, new Node(9), new Node(0)));
const M = new Node("M", G, O);
const D = new Node("D", new Node("B", new Node(6), new Node("=")), new Node("X", new Node("/")));
const K = new Node("K", new Node("C"), new Node("Y"));
const N = new Node("N", D, K);
const T = new Node("T", N, M);

// putting left branch and right branch together
const morseCode = new Tree();
morseCode.root = new Node("start", E, T);
// console.dir(morseCode, {depth: null});

// -------------------------------------
// Decoding Morse Code
// Create a method that takes in an array of valid morse code and returns the english translation
// Assume you have access to the root node of the morse code tree
// translate(["....", ".", ".-..", ".-..", "---"]); // hello
function translate(array, tree = morseCode) {
  let message = "";
  if (array.length === 0) return "There's no current message";
  // return message;
}

translate(["....", ".", ".-..", ".-..", "---"]); // hello
translate([]); // There's no current message
