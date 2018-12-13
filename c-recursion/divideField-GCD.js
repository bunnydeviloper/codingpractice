// similar to finding the greatest common divisor
function divideField (height, width) {
    if (height === width) return height;
    if (height > width) {
        return divideField(height - width, width); 
    } else {
        return divideField(height, width - height);
    }
}

console.log(divideField(3, 12)); // 3
console.log(divideField(5, 12)); // 1
console.log(divideField(1640, 680)); // 40

// GCD is also Euclid Algorithm (HCF - highest common factor)
// and also called prime factorization problem
function euclidianAlgorithm (num1, num2) {
    if (num1 >= num2) { // num1 is max
        if (num1 % num2 === 0) return num2;
        else return euclidianAlgorithm(num1 - num2, num2);
    } else return euclidianAlgorithm(num2, num1);

    /* same as:
    } else {
        if (num2 % num1 === 0) return num1;
        else return euclidianAlgorithm(num2 - num1, num1);
    }
    */
}

console.log('HCF: ', euclidianAlgorithm(12345, 285)); // 15
console.log('HCF: ', euclidianAlgorithm(12345, 12344)); // 1