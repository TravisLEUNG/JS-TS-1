/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length <= 1) return s;

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let sArray = s.split('');
    let vowelsList = sArray
        .filter((letter) => vowels.includes(letter))
        .reverse();
    if (vowelsList.length <= 1) return s;

    for (let i = 0, j = 0; i < vowelsList.length && j < sArray.length; j++) {
        if (vowels.includes(sArray[j])) {
            sArray[j] = vowelsList[i];
            i++;
        }
    }
    return sArray.join('');
};
