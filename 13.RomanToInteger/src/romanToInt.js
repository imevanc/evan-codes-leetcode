/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hashMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let first = 0;
  let second = 1;
  let sum = 0;
  while (first < s.length) {
    if (hashMap[s[first]] < hashMap[s[second]]) {
      sum -= hashMap[s[first]];
    } else {
      sum += hashMap[s[first]];
    }
    first++;
    second++;
  }
  return sum;
};
