/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashMap = s.split("").reduce((hashMap, letter) => {
    if (letter in hashMap) {
      hashMap[letter] += 1;
    } else {
      hashMap[letter] = 1;
    }
    return hashMap;
  }, {});
  for (let i = 0; i <= t.length - 1; i++) {
    if (t[i] in hashMap) {
      hashMap[t[i]] -= 1;
    } else {
      return false;
    }
  }
  for (key in hashMap) {
    if (hashMap[key] != 0) {
      return false;
    }
  }
  return true;
};
