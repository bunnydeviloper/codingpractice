// given a circular link list, find the length of the circular loop

function loopLength (list) {
  if (!list.head) return null;

  let p1 = list.head;
  let p2 = list.head;
  let isLoop = false;

  while (p2.next.next) {
    p1 = p1.next;      // slow pointer
    p2 = p2.next.next; // fast pointer, will move twice as fast

    // when p1 meets p2, we found a cycle and break out of the loop
    if (p1 === p2) {
      isLoop = true;
      break;
    }
  }

  // if there is a loop, we find the length by increasing fast pointer 1 step at a time
  // (keep slow pointer at the same fixed location)
  // until fast = slow then that means we walked the entire circle
  let length = 0;
  if (isLoop) {
    length++;
    p2 = p2.next;
    while (p1 !== p2) {
      length++;
      p2 = p2.next;
    }
  }

  return length;
}

const f = { value: 6, next: null };
const e = { value: 5, next: f };
const d = { value: 4, next: e };
const c = { value: 3, next: d };
const b = { value: 2, next: c };
const a = { value: 1, next: b };
f.next = c;
const myList = { head: a };

const resultLength = loopLength(myList);
console.log('Expect loop length to be 4 ', resultLength);
