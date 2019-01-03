// Given an array of integers, return a new array
// such that each element at index i of the new array is the product
//  of all the numbers in the original array except the one at i.

function arrayProduct (array) {
    return array.reduce((accum, curr) => {
        accum.push(computeProduct(array) / curr);
        return accum;
    }, []);
}

function computeProduct (array) {
    return array.reduce((curr, accum) => accum * curr);
}

console.log(arrayProduct([3, 2, 1])); // [2, 3, 6]
console.log(arrayProduct([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]

// Follow-up: what if you can't use division?
function arrayProductWithoutDivision (array) {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        // extract out the remaining elements to a different array
        const tempArray = array.filter(e => e !== array[i]);
        resultArray.push(computeProduct(tempArray));
    }
    return resultArray;
}



console.log(arrayProductWithoutDivision([3, 5, 1, 2])); // [10, 6, 30, 15]