// given a sorted array with integers and a number
// return true if the number exist in the array, else return false

function binarySearchRecursion (array, number) {
    if (number < array[0] || number > array[array.length -1]) return false;
    if (array.length === 0) return false;

    const midIndex = Math.floor((array.length - 1) / 2);
    let midValue = array[midIndex];

    if (midValue === number) return true;
    else if (midValue < number) {
        return binarySearchRecursion(array.slice(midIndex, array.length - 1), number);
        // NOTE: array.slice returns a new array containing extracted elements
    }
    else return binarySearchRecursion(array.slice(0, midIndex), number);
}

const testArray = [1, 3, 6, 9, 12, 15, 20, 22, 30];
console.log(binarySearchRecursion(testArray, 15)); // true
console.log(binarySearchRecursion(testArray, 5)); // false
console.log(binarySearchRecursion(testArray, 50)); // false, out of range