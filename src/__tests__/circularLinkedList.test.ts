import LinkedListWithCircularChecking, {
    NodeObj3,
} from '../circularLinkedList';

describe('LinkedListWithCircularChecking', () => {
    let list: LinkedListWithCircularChecking;

    beforeEach(() => {
        list = new LinkedListWithCircularChecking();
    });

    describe('insertFirst', () => {
        test('adds the first node to the list', () => {
            list.insertFirst(1);
            expect(list.getFirst()).toEqual(new NodeObj3(1));
        });

        test('adds multiple nodes to the list', () => {
            list.insertFirst(1);
            list.insertFirst(2);
            list.insertFirst(3);
            expect(list.getFirst()).toEqual(
                new NodeObj3(3, new NodeObj3(2, new NodeObj3(1)))
            );
        });
    });

    describe('getFirst', () => {
        test('returns null for an empty list', () => {
            expect(list.getFirst()).toBeNull();
        });

        test('returns the first node in the list', () => {
            list.insertFirst(1);
            expect(list.getFirst()).toEqual(new NodeObj3(1));
        });
    });

    describe('insertLast', () => {
        test('adds the first node to the list', () => {
            list.insertLast(1);
            expect(list.getFirst()).toEqual(new NodeObj3(1));
        });

        test('adds multiple nodes to the list', () => {
            list.insertLast(1);
            list.insertLast(2);
            list.insertLast(3);
            expect(list.getFirst()).toEqual(
                new NodeObj3(1, new NodeObj3(2, new NodeObj3(3)))
            );
        });
    });

    describe('getLast', () => {
        test('returns null for an empty list', () => {
            expect(list.getLast()).toBeNull();
        });

        test('returns the last node in the list', () => {
            list.insertLast(1);
            expect(list.getLast()).toEqual(new NodeObj3(1));
            list.insertLast(2);
            expect(list.getLast()).toEqual(new NodeObj3(2));
        });
    });

    describe('circularLinkedList', () => {
        test('returns false for an empty list', () => {
            expect(list.circularLinkedList(list.getFirst())).toBe(false);
        });

        test('returns false for a non-circular list', () => {
            list.insertLast(1);
            list.insertLast(2);
            list.insertLast(3);
            expect(list.circularLinkedList(list.getFirst())).toBe(false);
        });

        test('returns true for a circular list', () => {
            const node1 = new NodeObj3(1);
            const node2 = new NodeObj3(2);
            const node3 = new NodeObj3(3);
            const node4 = new NodeObj3(4);
            node1.next = node2;
            node2.next = node3;
            node3.next = node4;
            node4.next = node2;
            list.head = node1;
            expect(list.circularLinkedList(list.getFirst())).toBe(true);
        });
    });
});
