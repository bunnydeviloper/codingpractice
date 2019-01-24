// Given a binary array, find the maximum number zeros in an array with one flip of a subarray allowed.
// A flip operation switches all 0s to 1s and 1s to 0s.

function bitFlip (array) {
    if (array.length < 1) return 0; // corner case

    let zerosCount = 0;
    let maxSubArray = 0;
    let temp_maxSubArray = 0;

    array.forEach(digit => {
        if (digit === 0) {
            zerosCount++;
            temp_maxSubArray = 0; // reset
        }
        if (digit === 1) {
            temp_maxSubArray++;
        }
        maxSubArray = Math.max(maxSubArray, temp_maxSubArray);
    });
    return zerosCount + maxSubArray;
}

let test = bitFlip([0, 1, 0, 0, 1, 1, 0]);
console.log('Expect to equal 6: ', test);

test = bitFlip([0, 0, 1, 1, 0, 1]);
console.log('Expect to equal 5: ', test);

test = bitFlip([1, 0, 0, 1, 0]);
console.log('Expect to equal 4: ', test);

test = bitFlip([1, 0, 0, 1, 1, 1, 0, 1, 1]);
console.log('Expect to equal 6: ', test);