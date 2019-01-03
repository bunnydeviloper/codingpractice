// given an array of integers
// move all the 0 to the end of the array
// make sure to do it in place and make sure all numbers retain their orders

function moveZeros (array) {
    let indexOfLastNonZero = 0; // act as counter for all zeros in the array

    array.forEach(e => {
        // each iteration, we assign next-value-to-be = current if it's not 0
        if (e !== 0) array[indexOfLastNonZero++] = e;
    })

    // after moving all valid int to start of array, fill the rest with 0s
    while (indexOfLastNonZero < array.length) {
        array[indexOfLastNonZero] = 0
        indexOfLastNonZero++;
    }
    return array;
}

const testArray = [1, 2, 0, 0, 3, 0, 5, 0];
console.log(moveZeros(testArray));

// variation of algorithm:
function squeezeChar (string, char) {
    let indexOfLastValidChar = 0;

    let stringArr = string.split("");
    stringArr.forEach(e => {
        if (e !== char) stringArr[indexOfLastValidChar++] = e;
    })

    return stringArr.slice(0, indexOfLastValidChar).join("");
}

const result = squeezeChar('squeezee', 'e'); // 'squz'
console.log(result);