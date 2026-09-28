// Problem: Given a string s, return the length of the longest substring that contains no repeating characters.
example:
Input: s = "abcabcbb"
Output: 3

// Approach (sliding window with hashmap): Use a sliding window to maintain a substring without repeating characters. Use a hashmap to store the last index of each character. Expand the window by moving the right pointer and update the left pointer when a repeating character is found.   

var lengthOfLongestSubstring = function(s) {
    const lastSeen = new Map(); // char -> most recent index
    let left = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
            left = lastSeen.get(ch) + 1;
        }

        lastSeen.set(ch, right);
        best = Math.max(best, right - left + 1);
    }

    return best;
};