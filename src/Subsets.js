/*
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/
var subsets1 = function(nums) {
	let res=[]                    // the final arr, which we will display
	let auxArr = [], i=0             // global vars
    
    function recur(nums,i,auxArr){
        if(i==nums.length) { res.push(auxArr); return } //operation of recursion will be upto i=n-1
													 // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)
        
		// take it
        recur(nums, i+1, [...auxArr, nums[i] ] ) //or, we can use 'aux.concat(nums[i])'
		
		// dont take
        recur(nums, i+1, auxArr)
    
    }
    
    recur(nums,i,auxArr) // passing the global variable declared already
    return res        // rerturn the final 2d arr
    
    
};
/*
                         1 2 3
                    /             \
                  1                []
              /       \          /    \
            1 2        1        2.     []
            / \       / \      / \    /  \
          123. 12.   13. 1.  23.  2. 3.  [].
*/


var subsets2 = function(nums) {
    let res = [[]], appendarr= []
    
    for(let num of nums){
        appendarr = []
        for(let entry of res){
            appendarr.push([...entry, num])
        }
        
        res.push(...appendarr)
    }
    
    return res
    
};
/*
0 (Empty)             :         [] 
1 (Adding 1 to it)    :         [] [1] 
2 (Adding 2 to it)    :         [] [1] [2] [1,2]
3 (Adding 3 to it)    :         [] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]
 */