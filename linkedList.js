// val is [coords] history of coords

class Node {
    constructor(val = [], next = null) {
        this.val = val;
        this.next = next;
    }
}

export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (!this.head) {
            return this.prepend(value)
        } else {
            let tmp = this.head
            while (tmp.next !== null) tmp = tmp.next
            tmp.next = new Node(value)
            return this.returnLinkList();
        }
    }

    prepend(value) {
        this.head = new Node(value, this.head)
        return this.returnLinkList();
    }

    copy() {
        const copyLinkList = new LinkedList();
        let tmp = this.head 

        while(tmp !== null) {
            copyLinkList.append(tmp.val)
            tmp = tmp.next
        }
        return copyLinkList
    }
    //for the path result
    returnArrayVals() {
        let values = []
        let tmp = this.head 

        while(tmp !== null) {
            values.push(tmp.val)
            tmp = tmp.next
        }
        return values
    }

    returnLinkList() {
        return this;
    }
}