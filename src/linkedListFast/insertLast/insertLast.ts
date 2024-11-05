import { Node } from '../linkedList';

function insertLast<T> (data: T): void {
  if (this.tail) {
    this.tail.next = new Node(data);
    this.tail = this.tail.next;
  } else {
    this.head = this.tail = new Node(data);
  }

  this.size++;
};

export default insertLast;
