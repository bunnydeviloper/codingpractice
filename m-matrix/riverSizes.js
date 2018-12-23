/*
Given a 2D array (matrix) (potentially unequal h x w)
Each 0 represents land, each 1 represents part of a river.
A river consists of any number of 1s that are either horizontally or vertically adjacent
Write a function that returns an array of the sizes of all rivers
(note the sizes do not need to be in any particular order)
*/

function riverSizes(matrix) {
  let output = []; // initialize
  let visited = matrix.map(row => {
    return row.map(cell => cell = false);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; i < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue; // if visited = true, we skip this iteration
      }
      traverseNode(i, j, matrix, visited, output); // helper fn
    }
  }
  return output;

}

function traverseNode (i, j, matrix, visited, output) {
  let currentRiverSize = 0; // initialize
  let nodesToExplore = [[i, j]];

  while (nodesToExplore.length > 0) {
    currentNode = nodesToExplore.pop(); // DFS using stack (if wanna use BFS => queue)
    // i = currentNode[i];
    // j = currentNode[j];
    if (visited[i][j]) {
      continue;
    }
    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue; // note: cannot combine with the if stmt above
    }
    currentRiverSize += 1;

    unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited); // helper fn
    unvisitedNeighbors.forEach(neighbor => nodesToExplore.push(neighbor));
  }

  if (currentRiverSize > 0) {
    output.push(currentRiverSize);
  }
  // return output;
}

// Time : O(width * height), same as O(n) where n is the number of cells
// Space: O(width * height) b/c of visited array + O(m) where m is the size of the output array

const sampleInput = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

riverSizes(sampleInput); // [1, 2, 2, 2, 5]

