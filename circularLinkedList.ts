/*
========= Circular Linked List =========
 - Prompt
   Given a linked list, return true if the list is circular, false if it is not.

 - Approach
   Input: A new LinkedList()
   Output: A Boolean that tells us if the linked list is circular or not.

 - Questions
    1. What does it mean for a linked list to be circular?
      It means that a next node value could point to a node that we have already seen in our linked list.

 - Plan
    We will have two pointers: one slow and one fast. The fast one will move twice as much as the slow one on each iteration. If it comes to be that the fast.next.next value doesn’t exist, we can assume it’s a linear linked list. If the slow pointer and the fast pointer ultimately end up equal, we know we have a circular component to our list.
 */

class NodeObj3 {
    data: any;
    next: NodeObj3 | null;
    constructor(data: any, next: NodeObj3 | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedListWithCircularChecking {
    head: NodeObj3 | null;
    constructor() {
        this.head = null;
    }

    insertFirst(data: any): void {
        this.head = new NodeObj3(data, this.head);
    }

    getFirst(): NodeObj3 | null {
        return this.head || null;
    }

    insertLast(data): void {
        let last = this.getLast();
        if (!last) {
            this.head = new NodeObj3(data);
        } else {
            last.next = new NodeObj3(data);
        }
    }

    getLast(): NodeObj3 | null {
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

    circularLinkedList(list: NodeObj3): boolean {
        if (list == null) return false;
        let slow: NodeObj3 | null = list;
        let fast: NodeObj3 | null = list.next;
        while (fast != null && fast.next != null) {
            if (slow == fast) return true;
            slow = slow?.next || null;
            fast = fast.next.next;
        }
        return false;
    }
}
