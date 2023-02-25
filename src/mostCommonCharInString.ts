/*
========= Most Commonly Used Character in String =========
 - Prompt
    Write a function that takes a string, and returns the character that is most commonly used in the string.

 - Approach
    Input: String = one String
    Output: String = the single character that shows up the most in the given string

 - Questions to ask the interviewer:
    1. Do we need to consider if there is no string given?
        For this challenge, no

    2. Do we need to consider times when more than one character shows up the same number of times?
        No. Return the last one.

 - Plan
    To find the character most often used in a string, we need to be able to count how many of each kind we have. We can do this using an object that has key:value pairs.
    1. Define and Initialize an object
    2. Map character count to that object.
    3. Loop through the object to find the max count.
    4. Assign new max count value to maxCharCount and new max key to maxChar.
    5. Return maxChar
 */

const mostCommonCharInString = (str: string): string => {
    const count: { [k: string]: number } = {};
    for (let i = 0; i < str.length; i++) {
        count[str[i]] = ++count[str[i]] || 1;
    }

    let mostCommonChar = '';
    let mostCommonCharCount = 0;
    for (let character in count) {
        if (count[character] >= mostCommonCharCount) {
            mostCommonCharCount = count[character];
            mostCommonChar = character;
        }
    }
    return mostCommonChar;
};

export default mostCommonCharInString;
