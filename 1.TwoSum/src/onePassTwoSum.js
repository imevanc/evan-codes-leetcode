/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = nums.reduce((hashMap, num, idx) => {
    hashMap[num] = idx;
    return hashMap;
  }, {});
  for (let i = 0; i <= nums.length - 1; i++) {
    if (hashMap[target - nums[i]] && hashMap[target - nums[i]] !== i)
      return [i, hashMap[target - nums[i]]];
  }
};
