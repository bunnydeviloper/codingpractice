function sum (array) {
    if (array.length === 1) return array[0];
    return array[array.length - 1] + sum(array.slice(0, array.length - 1));
}

function count (array) {
    if (array.length === 1) return 1;
    return 1 + count(array.slice(0, array.length -1));
}



let testArray = [1, 2, 3, 4, 5];
console.log('sum result: ', sum(testArray));
console.log('count: ', count(testArray));

testArray = [2, -3, 0];
console.log('sum result: ', sum(testArray));
console.log('count: ', count(testArray));