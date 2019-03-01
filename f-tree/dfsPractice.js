function depthFirstSearch(node, array = []) {
  if (!node.name) return array;

  array.push(node.name);

  for (const child of node.children) {
    depthFirstSearch(child, array);
  }
  return array;
}

const f = {name: 'F', children: [{name: 'I', children: []}, {name: 'J', children: []}]};
const b = {name: 'B', children: [{name: 'E', children: []}, f]};
const d = {name: 'D', children: [{name: 'G', children: [{name: 'K', children: []}]}, {name: 'H', children: []}]};
const a = {name: 'A', children: [b, {name: 'C', children: []}, d]};
console.dir(a, { depth: null });

const result = depthFirstSearch(a);
console.log(result); // return [ 'A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H' ]

console.log(depthFirstSearch({})); // return []
