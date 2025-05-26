// Add Front

class node {
    constructor(data) {
        this.data = data;
        this.next = null;    
    }
}

class sll {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFront() {
    
        var remove = this.head;
        this.head = remove.next;
        remove.next = null;
        return this;
    }

    front() {
        if(this.head == null) {
            return null;
        }
        return this.head.data;
    }
}
const sll1 = new sll();
    console.log(sll1.addFront(18));
    console.log(sll1.addFront(5));
    console.log(sll1.addFront(73));
    console.log(sll1.removeFront());
    console.log(sll1.front());
   