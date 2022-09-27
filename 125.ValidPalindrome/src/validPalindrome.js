/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sLowerCaseAndAlpha = s
    .toLowerCase()
    .split("")
    .filter((el) => el.charAt(0).match(/[a-zA-Z0-9]/))
    .join("");
  console.log(sLowerCaseAndAlpha);
  let left = 0;
  let right = sLowerCaseAndAlpha.length - 1;
  while (left <= right) {
    if (sLowerCaseAndAlpha[left++] != sLowerCaseAndAlpha[right--]) {
      return false;
    }
  }
  return true;
};
