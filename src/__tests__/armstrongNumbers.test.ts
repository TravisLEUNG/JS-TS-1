import armstrongNumbers from '../armstrongNumbers';

describe('armstrongNumbers', () => {
    it('returns true for armstrong number', () => {
        const num = 153;
        expect(armstrongNumbers(num)).toBe(true);
    });

    it('returns false for non-armstrong number', () => {
        const num = 12;
        expect(armstrongNumbers(num)).toBe(false);
    });

    it('returns true for single digit number', () => {
        const num = 5;
        expect(armstrongNumbers(num)).toBe(true);
    });
});
