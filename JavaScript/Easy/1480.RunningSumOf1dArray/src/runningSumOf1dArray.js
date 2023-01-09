/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  return nums.reduce((runningSum, num) => {
    runningSum.push(num + sum);
    sum += num;
    return runningSum;
  }, []);
};
