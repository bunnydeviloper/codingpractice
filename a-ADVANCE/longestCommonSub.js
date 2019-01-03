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

function longestCommonSubstring (mistypedWord, guessedWord) {
  let grid = makeGrid(mistypedWord, guessedWord);

  for (let i = 0; i < mistypedWord.length; i++) {
    for (let j = 0; j < guessedWord.length; j++) {
      if (mistypedWord[i] === guessedWord[j]) {
      // console.log('grid: ', grid[i-1]);
        if (i === 0) grid[i][j] = 1;
        else grid[i][j] = grid[i-1][j-1] + 1;
      }
      else grid[i][j] = 0;
    }
  }

  console.log(grid);
  return grid;
}

longestCommonSubstring('hish', 'fish');

// longest common subsequence
function longestCommonSubsequence (mistypedWord, guessedWord) {
  // return
}


