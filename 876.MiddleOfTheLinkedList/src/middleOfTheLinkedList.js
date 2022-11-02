/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let first = head;
  let second = head;
  while (second != null && second.next != null) {
    first = first.next;
    second = second.next.next;
  }
  return first;
};
