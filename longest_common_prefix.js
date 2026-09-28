// Problem: Given an array of strings strs, return the longest common prefix shared by all of them. If there is none, return "".
// example:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== ch) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};