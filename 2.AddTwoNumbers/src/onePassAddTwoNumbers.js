function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let additionNode = new ListNode(0);
  let ansNode = additionNode;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    let transformedSum = sum >= 10 ? sum % 10 : sum;
    additionNode.next = new ListNode(transformedSum);
    carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    additionNode = additionNode.next;
  }

  return ansNode.next;
};
