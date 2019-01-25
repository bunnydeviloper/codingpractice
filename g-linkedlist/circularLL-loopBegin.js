// given a circular link list, detect the begining of a loop

function loopBegin (list) {
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

  if (isLoop) {
    p1 = list.head; // start p1 at the head of the list
    while (p1 !== p2) {
      p1 = p1.next; // increase both fast and slow at the same speed
      p2 = p2.next;
    }
  }

  return p1;
}

const f = { value: 6, next: null };
const e = { value: 5, next: f };
const d = { value: 4, next: e };
const c = { value: 3, next: d };
const b = { value: 2, next: c };
const a = { value: 1, next: b };
f.next = e;
const myList = { head: a };

const result = loopBegin(myList);
console.log('Expect loop to start at node 5 ', result.value);
