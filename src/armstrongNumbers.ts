/*
========= Armstrong Numbers =========
 - Prompt
   An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.

 - Approach
   Input: Number = n-digit number
   Output: Boolean means either true or false. true if number is Armstrong Number; false if it is not.

 - Questions to ask the interviewer:
   1. May I have an example please?
        1^3 + 5^3 + 3^3 = 153

 - Plan
    Remember that in JavaScript type coercion exists. When working with Numbers is JS, remember to check the typeof the number. If it is a string, you’ll need to plan for that. This is really important when working with math in JS.
 */

const armstrongNumbers = (num: number): boolean => {
    let numString = num + '';
    let power = numString.length;
    let sum = numString
        .split('')
        .map((numStr) => Number(numStr) ** power)
        .reduce((a, b) => a + b, 0);

    return sum === num;
};

export default armstrongNumbers;
