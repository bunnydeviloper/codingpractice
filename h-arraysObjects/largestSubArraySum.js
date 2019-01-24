// given an array of integers (positive and negative)
// return a sub-array that has the largest sum

function largestSubArraySum (array) {
    if (array.length < 1) return null;

    let maxSum = 0;
    let currMaxSum = 0;

    for (let num of array) {
        currMaxSum = Math.max(num, currMaxSum + num);
        maxSum = Math.max(currMaxSum, maxSum);
    }
    return maxSum;
}

let result = largestSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log('Expect result to be 7: ', result);
result = largestSubArraySum([5, -6, 4, -3, 3, 3]);
console.log('Expect result to be 7: ', result);
result = largestSubArraySum([5, 6, 4, 3, -7, 1]);
console.log('Expect result to be 18: ', result);

function largestSubArraySum2 (array) {
    if (array.length < 1) return null;

    let maxSum = 0;
    let currMaxSum = 0;

    for (let num of array) {
        currMaxSum += num;
        if (currMaxSum < 0) currMaxSum = 0;
        maxSum = Math.max(currMaxSum, maxSum);
    }
    return maxSum;
}

result = largestSubArraySum2([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log('Expect result to be 7: ', result);
result = largestSubArraySum2([5, -6, 4, -3, 3, 3]);
console.log('Expect result to be 7: ', result);
result = largestSubArraySum2([5, 6, 4, 3, -7, 1]);
console.log('Expect result to be 18: ', result);