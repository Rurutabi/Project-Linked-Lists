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

  _append(val) {
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

  _prepend(val) {
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

  _printSize() {
    let curr = this.head;
    this.size = 0;
    while (curr !== null) {
      this.size = this.size + 1;
      curr = curr.next;
    }

    console.log(this.size);
  }

  _getHead() {
    return this.head;
  }

  _getTail() {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    return curr;
  }

  _atIndex(index) {
    if (index < 0) return 'index less than 0';

    let curr = this.head;
    this.size = 0;

    while (this.size !== index) {
      this.size = this.size + 1;
      if (curr !== null) {
        curr = curr.next;
      } else {
        console.log('Index larger than node');
        break;
      }
    }

    console.log(curr);
  }

  // _popNode() {}
}

const theLink = new LinkedList();
theLink._append('a');
theLink._append('b');
theLink._append('c');
theLink._append('d');

theLink._prepend('firstNode');

// theLink._printSize();

// console.log(theLink._printSize());
// console.log(theLink._getTail());

// console.log(theLink._atIndex(2));
// console.log(theLink._atIndex(4));
theLink._atIndex(4);
