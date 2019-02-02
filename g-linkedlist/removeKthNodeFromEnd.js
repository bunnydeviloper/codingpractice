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

const removeKthNodeFromEndLinkedList = (list, k) => {
  if (!list.head || k < 1) return;
  let kthNodeFromEnd = list.head;
  let tempNode = list.head;
  let counter = 0;

  // move tempNode to the kth position from head
  while (counter <= k) {
    if (tempNode.next) {
      tempNode = tempNode.next;
      counter++;
    }
    return 'Invalid K!';
  }

  // if the tempNode is null, that means we only have kth elements, hence we remove kth node from end by changing the head to head.next
  if (tempNode === null) {
    // list.head.value = list.head.next.value;
    list.head.next = list.head.next;
  }

  // else keep increasing the tempNode and kthNodeFromEnd at the same speed, once tempNode reach the end, kthNode will be kth away from end
  while (tempNode !== null) {
    kthNodeFromEnd = kthNodeFromEnd.next;
    tempNode = tempNode.next;
  }
  
  // remove kth node
  kthNodeFromEnd.next = kthNodeFromEnd.next.next;

  return list;
}

console.log(JSON.stringify(myList));
const result = removeKthNodeFromEndLinkedList(myList, 3);
console.log('List after remove 3rd node from end: \n');
console.log(JSON.stringify(result));

const result2 = removeKthNodeFromEndLinkedList(invalidList, 3);
console.log('Invalid list: ', result2);

const result3 = removeKthNodeFromEndLinkedList(shortList, 3);
console.log('List after remove 3rd node from end: \n');
console.log(result3);
