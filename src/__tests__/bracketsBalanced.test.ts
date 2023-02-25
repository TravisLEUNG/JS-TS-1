import balancedBrackets from '../bracketsBalanced';

describe('balancedBrackets', () => {
    test('should return true for a string with balanced brackets', () => {
        expect(balancedBrackets('({[]})')).toBe(true);
    });

    test('should return false for a string with unbalanced brackets', () => {
        expect(balancedBrackets('({[)})')).toBe(false);
    });

    test('should return true for an empty string', () => {
        expect(balancedBrackets('')).toBe(true);
    });

    test('should return false for a string with mismatched brackets', () => {
        expect(balancedBrackets('({[}])')).toBe(false);
    });
});
