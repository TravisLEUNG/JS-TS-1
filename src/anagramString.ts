/*
========= Two Strings Are Anagrams of Each Other =========
 - Prompt
   Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.

 - Approach
   Input: String, String = two Strings
   Output: Boolean are either true or false. True if they are anagrams of each other, and false if they are not.

 - Questions to ask the interviewer:
   1. What is an anagram?
      An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

   2. Do we need to consider whitespace?
      Trim whitespace prior to comparison.

 - Plan
   If an anagram is just a bunch of letters jumbled around, we can see if the strings are anagrams of each other by:
    1. Comparing the length: if they are not same length, they are not an anagram of the other
    2. Sorting the string and using an equality operator to see if it’s equal.
 */

const anagramString = (str1: string, str2: string): boolean => {
    if (str1.length != str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort();
    let sortedStr2 = str2.split('').sort();
    return sortedStr1.join('') === sortedStr2.join('');
};

export default anagramString;
