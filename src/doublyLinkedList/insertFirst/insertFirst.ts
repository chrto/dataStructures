import { ListNode } from '../doublyLinkedList';

function insertFirst<T> (data: T): void {
  if (this.size === 0) {
    this.head = this.tail = new ListNode(data);
  } else {
    this.head = new ListNode(data, null, this.head);
  }
  this.size++;
};

export default insertFirst;
