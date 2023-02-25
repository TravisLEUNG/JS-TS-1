/*
========= Remove Kth-Node from Linked List =========
 - Prompt
   Using the Node and LinkedList classes that you created in the previous question, add methods to it so that, when given an kth-integer, you can delete that kth-node from the linked list

 - Approach
    Input: We will add to the Linked List and Node classes that were written in the previous question.
    Output: This is a class that will create instances of a LinkedList. We will use it to test delete a kth-node functionality.

 - Question
    1. Is this a zero-based indexing?
        Yes.

 - Plan
    When given K we have to be able to delete that node in a linked list. To handle edge cases, we need to have some knowledge of the size of the list, the node prior to the Kth node and the node after the Kth node. We essentially need to redirect the pointers for those nodes to not include the one we want to be deleted.
    To do that, we’ll loop through the list, keep track of which node we’re on, and change the pointers to skip the Kth-node. It’ll still be in memory, ready to be written over, but it will be essentially deleted from our list.
 */

export class NodeObj2 {
    data: any;
    next: NodeObj2 | null;
    constructor(data: any, next: NodeObj2 | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedListWithIndexRemoving {
    head: NodeObj2 | null;
    constructor() {
        this.head = null;
    }

    insertFirst(data: any): void {
        this.head = new NodeObj2(data, this.head);
    }

    getFirst(): NodeObj2 | null {
        return this.head || null;
    }

    insertLast(data: any): void {
        let last = this.getLast();
        if (!last) {
            this.head = new NodeObj2(data);
        } else {
            last.next = new NodeObj2(data);
        }
    }

    getLast(): NodeObj2 | null {
        let last = this.head;
        while (last?.next) {
            last = last.next;
        }
        return last;
    }

    consoleList(): void {
        let str = '';
        let curr = this.head;
        while (curr?.next) {
            str += curr.data + ' -> ';
            curr = curr.next;
        }
        console.log(str + (curr?.data || 'null'));
    }

    removeNodeByIndex(index: number): void {
        if (!this.head) {
            return;
        }

        let prevPointer: NodeObj2 | null = null,
            pointer: NodeObj2 | null = this.head;
        let count: number = 0;
        while (count < index && pointer.next) {
            // Keep moving the pointer and previous pointer
            prevPointer = pointer;
            pointer = pointer.next;
            count++;
        }

        if (count === index) {
            // If find target, remove the Node
            if (index === 0) this.head = pointer.next;
            if (prevPointer && pointer) prevPointer.next = pointer.next;
            pointer.next = null;
        }
    }
}

export default LinkedListWithIndexRemoving;
