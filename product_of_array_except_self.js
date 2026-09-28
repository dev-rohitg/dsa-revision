// problem : Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
example:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

// Approach (prefix and suffix products): The product except nums[i] equals (product of everything to its left) × (product of everything to its right). Compute the left products in one pass, then multiply in the right products in a second pass, reusing the output array to keep extra space at O(1).

var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Pass 1: answer[i] = product of all elements left of i
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // Pass 2: multiply by product of all elements right of i
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
};
