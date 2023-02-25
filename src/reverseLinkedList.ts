/*
========= Reverse a Linked List =========
 - Prompt
   Create a Node class and a LinkedList class with these methods:
        insertFirst(data)
        insertLast(data)
        getFirst()
        getLast()

 - Approach
    Input: Nothing. We are building two classes from scratch that have methods.
    Output: This is a class that will create instances of a LinkedList. We will use it to test the reverse a linked list functionality.

 - Question
    1. Are we to assume this is a singly-linked list that actually exists?
        No. Handle all possible errors if you can.

 - Plan
    The first thing we need to investigate is how a linked list works. Once we have that figured out, it might be a lot easier to write out the code for it.
    Linked lists are different from arrays in that they don’t require a continuous place of residence in memory. Linked Lists can be broken up into single nodes if needed as long as the linked list’s next value is not null.
    Let’s plan to initialize three variables: prev as NULL, curr as head, and next as NULL. Iterate trough the Linked List. In a while loop, do the following.
    Store next node
    next = curr.next
    Change next of current (this is where the reversing happens)
    curr.next = prev
 */

export class NodeObj1 {
    data: any;
    next: NodeObj1 | null;
    constructor(data: any, next: NodeObj1 | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedListWithReverse {
    head: NodeObj1 | null;
    constructor() {
        this.head = null;
    }

    insertFirst(data: any): void {
        this.head = new NodeObj1(data, this.head);
    }

    getFirst(): NodeObj1 | null {
        return this.head || null;
    }

    insertLast(data: any): void {
        let last = this.getLast();
        if (!last) {
            this.head = new NodeObj1(data);
        } else {
            last.next = new NodeObj1(data);
        }
    }

    getLast(): NodeObj1 | null {
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

    reverse(head: NodeObj1 | null): NodeObj1 | null {
        let prev: NodeObj1 | null = null,
            curr: NodeObj1 | null = head,
            next: NodeObj1 | null = curr?.next || null;

        while (curr) {
            next = curr.next; // move next to next Node of curr
            curr.next = prev; // change curr point to prev <- reverse
            prev = curr; // move prev to curr's Node
            curr = next; // move curr to next's Node
        }

        this.head = prev;
        return this.head;
    }
}

export default LinkedListWithReverse;
