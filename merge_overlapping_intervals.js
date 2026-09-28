// merge_overlapping_intervals.js

// Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the input.
// example:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]


var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // Sort by start time (copy first so we don't mutate the input)
    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

    const merged = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const last = merged[merged.length - 1];
        const [start, end] = sorted[i];

        if (start <= last[1]) {
            // Overlap: extend the end if needed
            last[1] = Math.max(last[1], end);
        } else {
            merged.push([start, end]);
        }
    }

    return merged;
};