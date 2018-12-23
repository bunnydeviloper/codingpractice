/*
Given a 2D array (matrix) (potentially unequal h x w)
Each 0 represents land, each 1 represents part of a river.
A river consists of any number of 1s that are either horizontally or vertically adjacent
Write a function that returns an array of the sizes of all rivers
(note the sizes do not need to be in any particular order)
*/

function riverSizes(matrix) {
  let output = [];
  let visited = matrix.map(row => {
    return row.map(cell => cell = false);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; i < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue; // 'if visited = true, we skip this iteration
      }
      traverseNode(i, j, matrix, visited, output);
    }
  }
  return output;

}

function traverseNode (i, j, matrix, visited, output) {
  return output;
}

const sampleInput = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

riverSizes(sampleInput); // [1, 2, 2, 2, 5]

