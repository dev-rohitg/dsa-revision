// Problem: Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence keeps the original order but doesn't need to be contiguous.
// example:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


// Approach (patience sorting + binary search): Maintain an array tails, where tails[k] is the smallest possible tail value of any increasing subsequence of length k+1. For each number, binary search for the first tail that is >= it and replace that tail. If none exists, append it. The final length of tails is the answer.

var lengthOfLIS = function(nums) {
    const tails = [];

    for (const num of nums) {
        let lo = 0;
        let hi = tails.length;

        // Find the first index where tails[idx] >= num
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < num) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        tails[lo] = num; // replace, or append if lo === tails.length
    }

    return tails.length;
};