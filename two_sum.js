problem: https://leetcode.com/problems/two-sum/
// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

var twoSum = function(nums, target) {
    const seen = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        const rem = target - nums[i];
        if (seen.has(rem)) {
            return [seen.get(rem), i];
        }
        seen.set(nums[i], i);
    }
};