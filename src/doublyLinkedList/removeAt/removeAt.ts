import { TListNode } from '../doublyLinkedList';

function removeAt (index: number): void {
  if (index < 0 || index >= this.size)
    return;

  if (index === 0) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (index === this.size - 1) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {

    let counter: number = 0;
    let currNode: TListNode<any> = this.head;

    while (counter < index) {
      currNode = currNode.next;
      counter++;
    }
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
  }
  this.size--;

};

export default removeAt;
