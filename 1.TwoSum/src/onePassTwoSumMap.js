/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - nums[i];
    if (hashMap.has(secondNum)) {
      return [i, hashMap.get(secondNum)];
    }
    hashMap.set(firstNum, i);
  }
};
