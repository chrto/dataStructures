import { ListNode } from '../doublyLinkedList';

function insertLast<T> (data: T): void {
  if (this.size === 0) {
    this.head = this.tail = new ListNode(data);
  } else {
    this.tail = new ListNode(data, this.tail, null);
  }
  this.size++;
};

export default insertLast;
