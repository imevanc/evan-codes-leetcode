/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const storage = [];
  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] in hashMap) {
      storage.push(s[i]);
    } else {
      if (s[i] != hashMap[storage.pop()]) {
        return false;
      }
    }
  }
  return storage.length === 0;
};
