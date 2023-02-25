import LinkedListWithReverse, { NodeObj1 } from '../reverseLinkedList';

describe('LinkedListWithReverse', () => {
    let list: LinkedListWithReverse;

    beforeEach(() => {
        list = new LinkedListWithReverse();
        list.insertFirst(3);
        list.insertFirst(2);
        list.insertFirst(1);
    });

    describe('reverse', () => {
        it('should return null when given null', () => {
            const result = list.reverse(null);
            expect(result).toBeNull();
        });

        it('should return the head of the reversed linked list', () => {
            const result = list.reverse(list.head);
            expect(result).toBeInstanceOf(NodeObj1);
            expect(result?.data).toBe(3);
            expect(result?.next?.data).toBe(2);
            expect(result?.next?.next?.data).toBe(1);
            expect(result?.next?.next?.next).toBeNull();
        });

        it('should update the head of the original list to the tail of the reversed list', () => {
            list.reverse(list.head);
            expect(list.head?.data).toBe(3);
            expect(list.head?.next?.data).toBe(2);
            expect(list.head?.next?.next?.data).toBe(1);
            expect(list.head?.next?.next?.next).toBeNull();
        });
    });
});
