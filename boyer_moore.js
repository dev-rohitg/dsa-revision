// Problem: Given an array nums of size n, return the majority element, the one that appears more than ⌊n/2⌋ times. You may assume it always exists.
// example:
// Input: nums = [3,2,3]
// Output: 3

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}