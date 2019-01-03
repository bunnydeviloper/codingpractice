// longest common substring

function makeGrid (string1, string2) {
  let grid = [];
  for (let i = 0; i < string1.length; i++) {
    grid[i] = []; // set up inner array
    for (let j = 0; j < string2.length; j++) {
      // grid[i][j] = string2.charAt(j);
      grid[i][j] = 0;
    }
  }
  return grid;
}

// makeGrid('hi', 'twice');

function findMaxValueInGrid (grid) {
  let max = 0;
  grid.forEach(e => {
    if (Math.max(...e) > max) max = Math.max(...e);
  });
  return max;
}

// const max = findMaxValueInGrid([[1, 3], [2, 0, 5], [1]]);
// console.log(max); // 5

function longestCommonSubstring (mistypedWord, guessedWord) {
  let grid = makeGrid(mistypedWord, guessedWord);

  for (let i = 0; i < mistypedWord.length; i++) {
    for (let j = 0; j < guessedWord.length; j++) {
      // if the letters match, the value of cell will be top-left-neighbor + 1
      if (mistypedWord[i] === guessedWord[j]) {
        if (i === 0) grid[i][j] = 1; // prevent negative index, eg: i-1 when i=0
        else grid[i][j] = grid[i-1][j-1] + 1;
      }

      // if the letters don't match, the value of cell is 0
      else grid[i][j] = 0;
    }
  }

  return findMaxValueInGrid(grid);
}

let result = longestCommonSubstring('hish', 'fish');
console.log('hish VS fish: ', result);

result = longestCommonSubstring('hish', 'vista');
console.log('hish VS vista: ', result);

// problem: longestCommonSubstring('fort', 'fish') === longestCommonSubstring('fosh', 'fish') // 2
// so we need to compare the longest common subsequence
// (aka: the number of letters in a sequence that the two words have in common)
//
function longestCommonSubsequence (mistypedWord, guessedWord) {
  let grid = makeGrid(mistypedWord, guessedWord);

  for (let i = 0; i < mistypedWord.length; i++) {
    for (let j = 0; j < guessedWord.length; j++) {
      // if the letters match, the value of cell will be top-left-neighbor + 1
      if (mistypedWord[i] === guessedWord[j]) {
        if (i === 0) grid[i][j] = 1; // prevent negative index, eg: i-1 when i=0
        else grid[i][j] = grid[i-1][j-1] + 1;
      }

      // if the letters don't match, the value of cell the larger of top-cell or left-cell
      else {
        if (i === 0 && j !== 0) grid[i][j] = grid[i][j - 1];
        else if (i !== 0 && j === 0) grid[i][j] = grid[i-1][j];
        else grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1]);
      }
    }
  }

  // console.log(grid);
  return findMaxValueInGrid(grid);
}

let testSubsequence = longestCommonSubsequence('fosh', 'fish');
console.log('testSubsequence for FOSH vs FISH: ', testSubsequence);
testSubsequence = longestCommonSubsequence('fosh', 'fort');
console.log('testSubsequence for FOSH vs FORT: ', testSubsequence);
