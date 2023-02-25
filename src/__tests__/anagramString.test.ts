import anagramString from '../anagramString';

describe('anagramString', () => {
    it('returns true for anagrams', () => {
        const str1 = 'listen';
        const str2 = 'silent';
        expect(anagramString(str1, str2)).toBe(true);
    });

    it('returns false for non-anagrams', () => {
        const str1 = 'hello';
        const str2 = 'world';
        expect(anagramString(str1, str2)).toBe(false);
    });

    it('returns false for strings of different lengths', () => {
        const str1 = 'abc';
        const str2 = 'abcd';
        expect(anagramString(str1, str2)).toBe(false);
    });
});
