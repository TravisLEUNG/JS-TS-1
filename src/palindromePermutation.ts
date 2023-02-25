/*
========= String Permutation is Palindrome =========
 - Prompt
   Given a string, write a function that will return whether or not that string is a palindrome.

 - Approach
   Input: String = one String
   Output: Boolean means either true or false. true if string is a palindrome; false if it is not.

 - Questions to ask the interviewer:
   1. Do we need to consider whitespace?
      Trim whitespace.

   2. Does the palindrome need to be in the dictionary?
      No, it does not.

 - Plan
    1. Reverse the string. We need to keep the old reference to the string to use later. To do this, we need to split string into an array.
    2. Reverse the string.
    3. Join the string.
    4. See if new variation of string is equal to an old variation of string.
 */

const palindromePermutation = (str: string): boolean => {
    let trimmedStr = str.replace(/[^a-zA-Z0-9]/g, '');
    let sortedStr = trimmedStr.toLowerCase().split('').sort();

    let i = 0,
        j = 1;
    let skipOnce = sortedStr.length % 2 === 1;
    while (i < sortedStr.length && j < sortedStr.length) {
        if (sortedStr[i] !== sortedStr[j]) {
            if (skipOnce) skipOnce = false;
            else return false;
            i += 2;
        } else (i += 2), (j += 2);
    }
    return true;
};

export default palindromePermutation;
