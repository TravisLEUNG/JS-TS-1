/*
========= Balanced Brackets =========
 - Prompt
   Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.

 - Approach
   Input: String = one String
   Output: Boolean means either true or false. true if string has balanced brackets; false if it does not.

 - Questions to ask the interviewer:
   1. What do you mean by balanced brackets?
         A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type. No bracket can be left unmatched. A closing bracket also cannot match a corresponding opening bracket that comes after it. Brackets also cannot overlap each other.
   2. Will the string only have brackets in it?
         No. All chars can be used.

 - Plan
    1. Initialize and Declare Variable for Longest String
    2. Loop through the array
    3. Find the length of each string
    4. Determine if that length is the largest we have seen so far.
    5. Replace the longest/largest variable with the arr[index] as long as length is greater than the variable.
    6. Return longest/largest string.
 */

const balancedBrackets = (str: string): boolean => {
    const stack: string[] = [];
    const openBrackets = ['{', '[', '('];
    const closeBrackets = ['}', ']', ')'];
    const bracketMatch = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    for (let i = 0; i < str.length; i++) {
        if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else if (closeBrackets.includes(str[i])) {
            if (!stack.length) {
                return false;
            } else {
                const pairBracket = stack.pop();
                if (pairBracket && bracketMatch[pairBracket] !== str[i]) {
                    return false;
                }
            }
        }
    }
    return !stack.length;
};
