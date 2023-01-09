/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  let first = 0;
  let last = x.length - 1;
  while (first < last) {
    if (x[first++] !== x[last--]) {
      return false;
    }
  }
  return true;
};
