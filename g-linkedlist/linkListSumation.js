// given two numbers represented by a ll, where each node contains a single digit
// The digits are stored in reverse order
// write a fn that add the two numbers and return the sum as a linked list

// brute force: convert l1 to number, l2 to number, then add them up, and convert to linked list

const list1 = {
  value: 7, next: { value: 1, next: { value: 6, next: null }, },
};

const list2 = {
  value: 5, next: { value: 9, next: { value: 2, next: { value: 4, next: null },},},
};

const llSum = (l1, l2) => {
  let curr1 = l1;
  let curr2 = l2;
  let result = { head: {} };
  let head = result.head;
  let sum = 0;
  let carryOver = 0;

  while (curr1 !== null || curr2 !== null) {
    if (curr1 === null) {
      // add the rest of curr2
      head.next = { value: curr2.value, next: null };
      head = head.next;
      curr2 = curr2.next;
    }
    else if (curr2 === null) {
      // add the rest of curr1
      head.next = { value: curr1.value, next: null };
      head = head.next;
      curr1 = curr1.next;
    }
    else {
      if (carryOver > 0) {
        sum = carryOver + curr1.value + curr2.value;
        carryOver = 0; // reset
      }
      else sum = curr1.value + curr2.value;
      if (sum < 10) {
        head.next = { value: sum, next: null };
      } else {
        head.next = { value: sum - 10, next: null };
        carryOver = 1;
      }
      head = head.next;
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
  }

  return result;
};

// 617 + 4295 = 4912
// 2 => 1 => 9 => 4 => null
const test = llSum(list1, list2);
console.dir(test, {depth: null});

// another test case
// 626 + 4345 = 4971

/*
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
EXAMPLE
lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
Output: 9 -> 1 -> 2. That is, 912.
*/
