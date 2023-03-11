var reverseBetween = function (head, left, right) {
  if (!head || !head.next || left === right) {
    return head;
  }
  let idx = 1;
  let prevLower = null;
  let curLower = head;
  while (curLower && idx < left) {
    prevLower = curLower;
    curLower = curLower.next;
    idx++;
  }
  let storedPrevLower = prevLower;
  let storedCurLower = curLower;
  let prevPtr = null;
  let tmpPtr = null;
  while (curLower && idx <= right) {
    tmpPtr = curLower.next;
    curLower.next = prevPtr;
    prevPtr = curLower;
    curLower = tmpPtr;
    idx++;
  }
  if (storedPrevLower) {
    storedPrevLower.next = prevPtr;
  }
  storedCurLower.next = curLower;
  return storedPrevLower ? head : prevPtr;
};
