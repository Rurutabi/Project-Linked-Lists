class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    let curr = this.head;
    // console.log(curr);
    // console.log(curr.next);
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);

    // console.log(curr);
    // console.log(curr.next);
  }

  prepend(val) {
    //     1. Create a new node with the desired element.
    // 2. Set the next pointer of the new node to the current head of the linked list.
    // 3. Update the head pointer to the new node.
    // console.log(this.head.next.next.next.next);
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let temp = new Node(val);
    temp.next = this.head;
    this.head = temp;
  }
}

const theLink = new LinkedList();
theLink.append('a');
theLink.append('b');
theLink.append('c');
theLink.append('d');

theLink.prepend('f');
console.log(theLink);
