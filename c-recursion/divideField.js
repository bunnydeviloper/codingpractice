function divideField (height, width) {
    // similar to finding the greatest common divisor
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