const fifteen = {
  value: 15,
  left: {
    value: 13,
    left: null,
    right: { value: 14, left: null, right: null }
  },
  right: { value: 22, left: null, right: null }
};
const five = {
  value: 5,
  left: {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: null
  },
  right: { value: 5, left: null, right: null }
};

const ten = { value: 10, left: five, right: fifteen };
const myBst = { root: ten };

// -----------------------------------------------
// AVERAGE: O(log(n)) time | O(log(n)) space (b/c call stack)
// WORST: O(n) time | O(n) space (when you have 1 deep branch)
function findClosestValueInBst (tree, target) {
  if (!tree.root || !tree.root.value) return null;

  return findClosest(tree.root, target, closestValue = tree.root.value);
}

function findClosest (node, target, closestValue) {
  if (node === null) return closestValue;

  if (Math.abs(target - closestValue) > Math.abs(target - node.value)) {
    closestValue = node.value;
  }

  if (target < node.value) {
    return findClosest(node.left, target, closestValue);
  } else if (target > node.value) {
    return findClosest(node.right, target, closestValue);
  } else return closestValue;
}

const test = findClosestValueInBst(myBst, 12);
console.log(test); // { value: 10 }
console.log(findClosestValueInBst({root: {}}, 5)); // null
