import { TNode } from './../linkedList';

function reverse (): void {
  let
    prevNode: TNode<any> = null,
    currNode: TNode<any> = this.head,
    nextNode: TNode<any> = null;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode

    prevNode = currNode;
    currNode = nextNode;
  }
  this.head = prevNode;
};

export default reverse;
