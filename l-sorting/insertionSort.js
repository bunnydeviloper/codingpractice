// insertion sort: find the smallest, add to list, repeat
// imagine card game, you're going through the array one at a time
// each iteration removes 1 elem from array & 'insert' it to right location
// repeat until no input elements remain

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > value) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = value;
  }
  return array;
}

const test = insertionSort([2, 3, 1, 4, 5, 8, 7, 6]);
console.log(test);

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertonSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
