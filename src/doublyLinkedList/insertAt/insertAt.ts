import { ListNode, TListNode } from '../doublyLinkedList';

function insertAt<T> (data: T, index: number): void {
  let currentNode: TListNode<T>;
  let counter: number = 0;
  if (index === 0) {
    this.insertFirst(data);
  } else if (index === this.size) {
    this.insertLast(data);
  } else if (index > 0 && index < this.size) {
    currentNode = this.head;
    while (true) {
      if (index === counter) {
        new ListNode(data, currentNode.prev, currentNode);
        this.size++;
        return;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }
};

export default insertAt;
