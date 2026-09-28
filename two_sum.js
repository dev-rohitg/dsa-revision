problem: https://leetcode.com/problems/two-sum/
// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

var twoSum = function(nums, target) {

    const obj = new Map();
    
    for (i=0;i<nums.length;i++){
        obj[nums[i]]=i
    }

    for (j=0;j<nums.length;j++){
        rem = target - nums[j];
        if(obj.has(rem) && obj.has(rem)!=j){
            return[j,obj[rem]]
        }
    }
    
};