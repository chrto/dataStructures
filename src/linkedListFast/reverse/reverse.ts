import { TNode } from '../linkedList';

function reverse (): void {
  let
    prevNode: TNode<any> = null,
    currNode: TNode<any> = this.head,
    nextNode: TNode<any> = null;

  this.head = this.tail;
  this.tail = currNode;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;

    prevNode = currNode;
    currNode = nextNode;
  }
};

export default reverse;
