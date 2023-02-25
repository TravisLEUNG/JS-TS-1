import palindromePermutation from '../palindromePermutation';

describe('palindromePermutation', () => {
    it('returns true for a palindrome permutation', () => {
        const str = 'tact coa';
        const expected = true;
        const result = palindromePermutation(str);
        expect(result).toEqual(expected);
    });

    it('returns false for a non-palindrome permutation', () => {
        const str = 'abcde';
        const expected = false;
        const result = palindromePermutation(str);
        expect(result).toEqual(expected);
    });

    it('ignores non-alphabetic characters', () => {
        const str = 'A man, a plan, a canal, Panama!';
        const expected = true;
        const result = palindromePermutation(str);
        expect(result).toEqual(expected);
    });

    it('handles empty input', () => {
        const str = '';
        const expected = true;
        const result = palindromePermutation(str);
        expect(result).toEqual(expected);
    });
});
