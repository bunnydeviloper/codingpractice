function sum(array) {
    if (array.length === 1) return array[0];
    return array[array.length - 1] + sum(array.slice(0, array.length - 1));
}

let result = sum([1, 2, 3, 4, 5]);
console.log(result);

result = sum([2, 3, 4]);
console.log(result);