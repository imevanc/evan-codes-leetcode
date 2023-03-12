/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) {
    return list1;
  }
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  let dummyPointer = new ListNode(0);
  let currentPointer = dummyPointer;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentPointer.next = list1;
      list1 = list1.next;
    } else {
      currentPointer.next = list2;
      list2 = list2.next;
    }
    currentPointer = currentPointer.next;
    if (list1) {
      currentPointer.next = list1;
    }
    if (list2) {
      currentPointer.next = list2;
    }
  }
  return dummyPointer.next;
};
