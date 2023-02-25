import LinkedListWithIndexRemoving, { NodeObj2 } from '../removeNodeByIndex';

describe('LinkedListWithIndexRemoving', () => {
    let list: LinkedListWithIndexRemoving;

    beforeEach(() => {
        list = new LinkedListWithIndexRemoving();
    });

    describe('insertFirst', () => {
        test('adds an element to the beginning of the list', () => {
            list.insertFirst('a');
            expect(list.getFirst()).toEqual(new NodeObj2('a'));
            list.insertFirst('b');
            expect(list.getFirst()).toEqual(
                new NodeObj2('b', new NodeObj2('a'))
            );
        });
    });

    describe('getFirst', () => {
        test('returns null when the list is empty', () => {
            expect(list.getFirst()).toBeNull();
        });

        test('returns the first element in the list', () => {
            list.insertFirst('a');
            expect(list.getFirst()).toEqual(new NodeObj2('a'));
            list.insertFirst('b');
            const first = list.getFirst();
            expect(first?.data).toEqual('b');
            expect(first?.next).toEqual(new NodeObj2('a'));
        });
    });

    describe('insertLast', () => {
        test('adds an element to the end of the list', () => {
            list.insertLast('a');
            expect(list.getFirst()).toEqual(new NodeObj2('a'));
            list.insertLast('b');
            expect(list.getFirst()).toEqual(
                new NodeObj2('a', new NodeObj2('b'))
            );
        });
    });

    describe('getLast', () => {
        test('returns null when the list is empty', () => {
            expect(list.getLast()).toBeNull();
        });

        test('returns the last element in the list', () => {
            list.insertLast('a');
            expect(list.getLast()).toEqual(new NodeObj2('a'));
            list.insertLast('b');
            expect(list.getLast()).toEqual(new NodeObj2('b'));
        });
    });

    describe('removeNodeByIndex', () => {
        test('removes the first element in the list', () => {
            list.insertLast('a');
            list.insertLast('b');
            list.removeNodeByIndex(0);
            expect(list.getFirst()).toEqual(new NodeObj2('b'));
        });

        test('removes an element in the middle of the list', () => {
            list.insertLast('a');
            list.insertLast('b');
            list.insertLast('c');
            list.removeNodeByIndex(1);
            expect(list.getFirst()).toEqual(
                new NodeObj2('a', new NodeObj2('c'))
            );
        });

        test('removes the last element in the list', () => {
            list.insertLast('a');
            list.insertLast('b');
            list.removeNodeByIndex(1);
            expect(list.getLast()).toEqual(new NodeObj2('a'));
        });

        test('does not remove anything if the index is out of range', () => {
            list.insertLast('a');
            list.removeNodeByIndex(1);
            expect(list.getFirst()).toEqual(new NodeObj2('a'));
            expect(list.getLast()).toEqual(new NodeObj2('a'));
        });
    });
});
