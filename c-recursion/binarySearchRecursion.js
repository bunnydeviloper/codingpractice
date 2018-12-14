// given a sorted array with integers and a number
// return true if the number exist in the array, else return false

function binarySearchRecursion (array, number) {
    if (array.length === 0) return false;

    let minValue = array[0];
    let maxValue = array[array.length - 1];


    return binarySearchRecursion(array, number);
}

const testArray = [1, 3, 6, 9, 12, 15, 20, 22, 30];
console.log(binarySearchRecursion(testArray, 5));