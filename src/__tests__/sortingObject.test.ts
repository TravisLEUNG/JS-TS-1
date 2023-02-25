import sortingObject from '../sortingObject';

describe('sortingObject', () => {
    it('should sort an array of objects by population in ascending order', () => {
        const input = [
            { population: 100 },
            { population: 50 },
            { population: 200 },
            { population: 75 },
        ];

        const expectedOutput = [
            { population: 50 },
            { population: 75 },
            { population: 100 },
            { population: 200 },
        ];

        expect(sortingObject(input)).toEqual(expectedOutput);
    });

    it('should return an empty array if given an empty array', () => {
        const input: [] = [];

        const expectedOutput: [] = [];

        expect(sortingObject(input)).toEqual(expectedOutput);
    });

    it('should handle arrays with duplicate population values', () => {
        const input = [
            { population: 100 },
            { population: 75 },
            { population: 200 },
            { population: 75 },
        ];

        const expectedOutput = [
            { population: 75 },
            { population: 75 },
            { population: 100 },
            { population: 200 },
        ];

        expect(sortingObject(input)).toEqual(expectedOutput);
    });
});
