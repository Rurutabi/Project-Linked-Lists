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

    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  _prepend(val) {
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

    return curr;
  }

  _pop() {
    let curr = this.head;
    let temp;

    while (curr.next !== null) {
      temp = curr;
      curr = curr.next;
    }

    // this.head = null;
    temp.next = null;
  }

  containValue(val) {
    let curr = this.head;

    while (curr.value !== val) {
      curr = curr.next;
      if (curr === null) {
        return false;
      }
    }

    return curr.value;
  }

  findValue(val) {
    let index = 0;
    let curr = this.head;

    while (curr.value !== val) {
      curr = curr.next;
      index = index + 1;
      if (curr === null) {
        console.log('Value not found');
      }
    }

    return index;
  }

  toSring() {
    let tempString = '';
    let curr = this.head;
    while (curr !== null) {
      tempString = tempString + ` (${curr.value}) ` + '---->';

      curr = curr.next;
      if (curr === null) {
        tempString = tempString + null;
      }
    }

    // console.log(typeof tempString);
    return tempString;
  }

  insertAt(value, index) {
    if (index === 0) {
      return this._prepend(value);
    }

    this.size = 0;
    let prev;
    let curr = this.head;
    let after;

    while (this.size !== index) {
      this.size = this.size + 1;
      prev = curr;
      curr = curr.next;

      if (curr === null) {
        console.log('Index too large');
        this.size = 0;
        return false;
      }
    }

    prev.next = new Node(value);
    after = prev.next;
    after.next = curr;
    this.size = 0;
  }

  removeAt(index) {
    if (index < 0) return;

    let prev;
    let after;
    this.size = 0;
    let curr = this.head;

    if (index === 0) {
      after = curr.next;
      this.head = after;
    }

    if (index > 0) {
      while (this.size !== index) {
        this.size = this.size + 1;
        prev = curr;
        curr = curr.next;
        after = curr.next;
        if (curr === null) {
          return 'Reach the end';
        }
      }

      this.size = 0;
      prev.next = after;
    }
  }
}

const theLink = new LinkedList();
theLink._append('a');
theLink._append('b');
theLink._append('c');
theLink._append('d');

theLink._prepend('secondNode');
theLink._prepend('firstNode');
// theLink._printSize();

// console.log(theLink._printSize());
// console.log(theLink._getTail());

// console.log(theLink._atIndex(2));
// console.log(theLink._atIndex(4));
// theLink._pop();

theLink.toSring();

theLink.insertAt('fromInsert', 2);

theLink.removeAt(0);

console.log(theLink);
