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

// longest common subsequence
function longestCommonSubsequence (mistypedWord, guessedWord) {
  // return
}


