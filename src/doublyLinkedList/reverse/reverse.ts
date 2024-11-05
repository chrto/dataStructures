import { TListNode } from '../doublyLinkedList';

function reverse (): void {
  let
    currNode: TListNode<any> = this.head,
    nextNode: TListNode<any> = null;

  this.head = this.tail;
  this.tail = currNode;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = nextNode;
    currNode = nextNode;
  }
};

export default reverse;
