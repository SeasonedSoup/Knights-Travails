// val is [coords] history of coords

class Node {
    constructor(val, next = null) {
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
            prepend(value)
        } else {
            let tmp = this.head
            while (tmp.next !== null) tmp = tmp.next
            tmp.next = new Node(value)
        }
    }

    prepend(value) {
        this.head = new Node(value, this.head)
    }

    copy() {
        copyLinkList = new LinkedList();
        let cur = this.head 

        while(cur !== null) {
            copyLinkList.append(cur.val)
            cur = cur.next
        }
        return copyLinkList
    }
}