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

const removeKthNodeFromEndLinkedList = (list, k) => {
  if (!list.head || k < 1) return;

  let nodeBeforeKthNodeFromEnd = list.head;
  let tempNode = list.head;
  let counter = 1;

  // move tempNode to the kth position from head
  while (counter <= k) {
    if (tempNode) {
      tempNode = tempNode.next;
      counter++;
    } else return 'Invalid K!';
  }

  // if the tempNode is null, that means we only have kth elements
  // hence we remove kth node from end by changing head to head.next
  if (tempNode === null) {
    list.head = list.head.next;
    return list;
  }

  // else keep increasing the tempNode and nodeBeforeKthNodeFromEnd
  while (tempNode.next !== null) {
    nodeBeforeKthNodeFromEnd = nodeBeforeKthNodeFromEnd.next;
    tempNode = tempNode.next;
  }

  // remove kth node
  nodeBeforeKthNodeFromEnd.next = nodeBeforeKthNodeFromEnd.next.next;

  return list;
}

// O(n) time | O(1) space, n is the length of the linked list

// console.dir(myList, {depth: null});
const result = removeKthNodeFromEndLinkedList(myList, 3);
console.log('List after remove 3rd node from end: \n');
console.dir(result, {depth: null});

const invalidList = {
  head: { value: 1, next: { value: 2, next: null}}};
const result2 = removeKthNodeFromEndLinkedList(invalidList, 3);
console.dir(result2, {depth: null});

const shortList = { head: { value: "a", next: { value: "b", next: { value: "c", next: null }}}};
const result3 = removeKthNodeFromEndLinkedList(shortList, 3);
console.log('List after remove 3rd node from end: \n');
console.dir(result3, {depth: null});
