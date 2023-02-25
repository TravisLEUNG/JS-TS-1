import arrayReverse from '../reverseArray';

describe('arrayReverse', () => {
    test('reverses the array', () => {
        const input = [1, 2, 3, 4];
        const expected = [4, 3, 2, 1];
        const actual = arrayReverse(input);
        expect(actual).toEqual(expected);
    });

    test('returns empty array for empty input', () => {
        const input: any[] = [];
        const expected: any[] = [];
        const actual = arrayReverse(input);
        expect(actual).toEqual(expected);
    });

    test('returns single element array for single element input', () => {
        const input = [1];
        const expected = [1];
        const actual = arrayReverse(input);
        expect(actual).toEqual(expected);
    });
});
