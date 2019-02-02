// Set up singly link list for testing
const eight = { value: 8, next: null };
const seven = { value: 7, next: eight };
const six = { value: 6, next: seven };
const five = { value: 5, next: six };
const four = { value: 4, next: five };
const three = { value: 3, next: four };
const two = { value: 2, next: three };
const one = { value: 1, next: two };

const myList = { head: one };
const invalidList = { head: six };
const shortList = { head: five };
