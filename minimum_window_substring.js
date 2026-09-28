// Problem: Given strings s and t, return the smallest substring of s that contains every character of t (including duplicates). If no such substring exists, return "".

example:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

// Approach (sliding window with hashmap): Use a sliding window to maintain a substring of s that contains all characters of t. Use a hashmap to count the required characters in t and another hashmap to count the characters in the current window. Expand the window by moving the right pointer and contract it by moving the left pointer when all required characters are present.
// Approach (sliding window + need counts): Count the characters required by t. Expand right to include characters, tracking how many distinct required characters are fully satisfied. Once all are satisfied, shrink from left as far as possible while staying valid, recording the smallest window seen. Then move left once more (breaking validity) and continue expanding.

var minWindow = function(s, t) {
    if (t.length === 0 || s.length < t.length) return "";

    const need = new Map();
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const window = new Map();
    let satisfied = 0;          // distinct chars whose count meets the requirement
    const required = need.size; // distinct chars in t

    let left = 0;
    let bestStart = 0;
    let bestLen = Infinity;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        if (need.has(ch)) {
            window.set(ch, (window.get(ch) || 0) + 1);
            if (window.get(ch) === need.get(ch)) satisfied++;
        }

        // Shrink while the window is valid
        while (satisfied === required) {
            if (right - left + 1 < bestLen) {
                bestLen = right - left + 1;
                bestStart = left;
            }

            const leftCh = s[left];
            if (need.has(leftCh)) {
                if (window.get(leftCh) === need.get(leftCh)) satisfied--;
                window.set(leftCh, window.get(leftCh) - 1);
            }
            left++;
        }
    }

    return bestLen === Infinity ? "" : s.substring(bestStart, bestStart + bestLen);
};