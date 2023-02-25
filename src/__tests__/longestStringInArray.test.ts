import longestStringInArray from '../longestStringInArray';

describe('longestStringInArray', () => {
    it('should return the longest string in an array', () => {
        const arr = ['foo', 'bar', 'baz', 'qux', 'quux'];
        const longestString = longestStringInArray(arr);
        expect(longestString).toBe('quux');
    });

    it('should return an empty string for an empty array', () => {
        const arr: string[] = [];
        const longestString = longestStringInArray(arr);
        expect(longestString).toBe('');
    });

    it('should return the only string in a single-item array', () => {
        const arr = ['foobar'];
        const longestString = longestStringInArray(arr);
        expect(longestString).toBe('foobar');
    });

    it('should handle arrays with strings of equal length', () => {
        const arr = ['foo', 'bar', 'baz', 'qux'];
        const longestString = longestStringInArray(arr);
        expect(longestString).toBe('foo');
    });
});
