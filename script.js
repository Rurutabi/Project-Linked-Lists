class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const n1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

const theLink = new LinkedList();
