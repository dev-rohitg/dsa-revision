// Problem: Given an integer array nums and an integer k, return the total number of contiguous subarrays whose sum equals k. The array can contain negative numbers and zeros.
example:
Input: nums = [1,1,1], k = 2
Output: 2

// Approach (prefix sum with hashmap): Use a hashmap to store the frequency of prefix sums. For each element, calculate the current prefix sum and check if (current prefix sum - k) exists in the hashmap. If it does, it means there are subarrays that sum to k ending at the current index.

var subarraySum = function(nums, k) {
    const counts = new Map([[0, 1]]); // empty prefix has sum 0
    let prefix = 0;
    let result = 0;

    for (const num of nums) {
        prefix += num;

        if (counts.has(prefix - k)) {
            result += counts.get(prefix - k);
        }

        counts.set(prefix, (counts.get(prefix) || 0) + 1);
    }

    return result;
};