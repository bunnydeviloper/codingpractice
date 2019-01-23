// given a binary search tree (value on left smaller than value on right)
// and two nodes
// return the lowest common ancestor of the two nodes

function lowestCommonAncestor (root, n1, n2) {
  if (root.value > Math.max(n1, n2)) // root > max, go left (lower side)
    return lowestCommonAncestor(root.left, n1, n2);
  else if (root.value < Math.min(n1, n2)) // root < min, go right (higher side)
    return lowestCommonAncestor(root.right, n1, n2);
  else return root.value; // when min < root < max
}

const myTree = {
  root: {
    value: 10,
    left: { value: -10, left: null, right: {
        value: 8,
        left: { value: 6, left: null, right: null },
        right: { value: 9, left: null, right: null },
      }
    },
    right: { value: 30, left: {
        value: 25, left: null, right: { value: 28, left: null, right: null },
      },
      right: {
        value: 60, left: null, right: { value: 78, left: null, right: null },
      },
    },
  },
};

let result = lowestCommonAncestor(myTree.root, 28, 78);
console.log(result); // 30
result = lowestCommonAncestor(myTree.root, 6, 9);
console.log(result); // 8
result = lowestCommonAncestor(myTree.root, 6, 28);
console.log(result); // 10
