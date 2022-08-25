/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let sortedArray = strs.sort();
  let firstString = sortedArray[0];
  let lastString = sortedArray[sortedArray.length - 1];
  let longestPrefix = "";
  let pointer = 0;
  while (pointer <= firstString.length - 1) {
    if (firstString[pointer] != lastString[pointer]) {
      break;
    }
    longestPrefix += firstString[pointer++];
  }
  return longestPrefix;
};
