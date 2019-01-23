// given a BINARY tree and two nodes
// return the lowest common ancestor of the two nodes

function lowestCommonAncestorBT (root, n1, n2) {
  if (root === null) return null;

  if (root.value === n1 || root.value === n2) return root.value;

  let left = lowestCommonAncestorBT(root.left, n1, n2);
  let right = lowestCommonAncestorBT(root.right, n1, n2);

  if (left !== null && right !== null) return root.value;
  if (left === null && right === null) return null;

  return (left !== null) ? left : right;
}

const myTree = {
  root: {
    value: 3,
    left: { value: 6, left: { value: 2, left: null, right: null }, right: {
        value: 11,
        left: { value: 5, left: null, right: null },
        right: { value: 9, left: null, right: null },
      }
    },
    right: { value: 8, left: null, right: {
        value: 13, left: null, right: { value: 7, left: null, right: null },
      },
    },
  },
};

let result = lowestCommonAncestorBT(myTree.root, 8, 7);
console.log(result); // 8
result = lowestCommonAncestorBT(myTree.root, 5, 8);
console.log(result); // 3
result = lowestCommonAncestorBT(myTree.root, 2, 11);
console.log(result); // 6
