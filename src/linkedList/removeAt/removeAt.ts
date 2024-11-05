import { TNode } from './../linkedList';

function removeAt (index: number): void {
  if (index < 0 || index >= this.size)
    return;

  this.size--;

  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  let counter: number = 0;
  let currNode: TNode<any> = this.head,
    prevNode: TNode<any>;

  while (counter < index) {
    prevNode = currNode;
    currNode = currNode.next;
    counter++;
  }
  prevNode.next = currNode.next;
};

export default removeAt;
