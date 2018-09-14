function countingValleys(n, s) {
    let array = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        (s.charAt(i) === "U") ? array.push(1) : array.push(-1);
    }
    const trip = array.reduce((a, c) => {
        if (a + c === 0 && a < 0) count += 1;
        return a + c;
    });
    return count;
}

console.log(countingValleys(8, "UDUDUDUD")); // should be 0
console.log(countingValleys(12, "DDDUDUUUUUD")); // should be 1
console.log(countingValleys(4, "DUDU")); // should be 2
console.log(countingValleys(8, "UDDDUDUU")); // should be 1
