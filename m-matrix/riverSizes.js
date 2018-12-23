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
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue; // if visited = true, we skip this iteration
      }
      traverseNode(i, j, matrix, visited, output); // helper fn
    }
  }
  console.log('FINAL OUTPUT: ', output);
  return output;

}

function traverseNode (i, j, matrix, visited, output) {
  console.log('update visited in traverseNode\n', visited);
  let currentRiverSize = 0; // initialize
  let nodesToExplore = [[i, j]];
  console.log('nodesToExplore: ', nodesToExplore);

  while (nodesToExplore.length > 0) {
    currentNode = nodesToExplore.pop(); // DFS using stack (if wanna use BFS => queue)
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) { // must double check again even if already check in getUnvisitedNeighbors()
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
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  unvisitedNeighbors = []; // initialize

  // if we are not at the top row
  if (i > 0 && !visited[i-1][j]) {
    unvisitedNeighbors.push([i-1,j]);
  }

  // if we are not at the bottom row
  if (i < matrix.length - 1 && !visited[i+1][j])
    unvisitedNeighbors.push([i+1, j]);

  // if we are not at the left-most column
  if (j > 0 && !visited[i][j-1])
    unvisitedNeighbors.push([i, j-1]);

  // if we are not at the right-most column
  if (j < matrix[0].length - 1 && !visited[i][j+1]) // note: this assume all rows have equal length
    unvisitedNeighbors.push([i, j+1]);

  console.log('unvisitedNeighbors: ', unvisitedNeighbors);
  return unvisitedNeighbors;
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

