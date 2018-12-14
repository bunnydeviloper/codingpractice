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

const testInput = [1, 2, 3, 4, 5];
const testOutput =  [120, 60, 40, 30, 24];

console.log(arrayProduct([3, 2, 1])); // [2, 3, 6]


// TODO: Follow-up: what if you can't use division?