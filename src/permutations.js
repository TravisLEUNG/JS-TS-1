/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const output = [];
    /**
     * The goal is break down the problem by finding permutations in subarrays.
     * So we will maintain a subarray of fixed elements and a subarray for 
     * exploring permutations.
     *
     *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
     * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
     *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
     *                                 [2, 3], [1]    [2, 3, 1]
     *                                 [3, 1], [2]    [3, 1, 2]
     *                                 [3, 2], [1]    [3, 2, 1]                                 
     */
    const dfs = (curr, rest) => {
      // base case. Found a permutation because there's nothing else to explore.
      if (rest.length === 0) {
        output.push(curr);
        return;
      }
      for (let i = 0; i < rest.length; i++) {
        dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
      }
    }
    dfs([], nums);
    
    return output;
  };