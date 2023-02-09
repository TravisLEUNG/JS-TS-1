/*
========= Longest String in an Array =========
 - Prompt
    Write a function that accepts an array of strings. Return the longest string.

 - Approach
    Input: String[] = an array of strings
    Output: String = the longest of the strings in the array

 - Questions to ask the interviewer:
    1. Do we need to consider if there are no strings in the array?
      For this challenge, no

    2. Do we need to consider times when all of the strings are the same length?
      Yes. Return the first string.

 - Plan
    For this problem, we need to:
    1. Initialize and Declare Variable for Longest String
    2. Loop through the array
    3. Find the length of each string
    4. Determine if that length is the largest we have seen so far.
    5. Replace the longest/largest variable with the arr[index] as long as length is greater than the variable.
    6. Return longest/largest string.
 */

const longestStringInArray = (arr: Array<string>): string => {
    let longestString = '';
    arr.forEach((str) => {
        if (str.length > longestString.length) {
            longestString = str;
        }
    });
    return longestString;
};
