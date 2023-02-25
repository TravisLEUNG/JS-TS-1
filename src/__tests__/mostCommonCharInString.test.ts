import mostCommonCharInString from '../mostCommonCharInString';

describe('mostCommonCharInString', () => {
    it('returns the most common character in a string', () => {
        const str = 'abbcccddddeeeee';
        const expected = 'e';
        const result = mostCommonCharInString(str);
        expect(result).toEqual(expected);
    });

    it('returns an empty string when the input string is empty', () => {
        const str = '';
        const expected = '';
        const result = mostCommonCharInString(str);
        expect(result).toEqual(expected);
    });

    it('returns the first character when all characters have the same count', () => {
        const str = 'abcde';
        const expected = 'e';
        const result = mostCommonCharInString(str);
        expect(result).toEqual(expected);
    });

    it('returns the most common whitespace character', () => {
        const str = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
        const expected = ' ';
        const result = mostCommonCharInString(str);
        expect(result).toEqual(expected);
    });
});
