function jumpingOnClouds(c, steps = 0) {
    if (c.length <= 1) return steps;
    if (c[2] !== 1) {
        steps++;
        c.shift();
    } else {
        steps++;
    }
    c.shift();
    return jumpingOnClouds(c, steps);
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0])); // 3
console.log(jumpingOnClouds([0,0,1,0,0,1,0])); // 4
