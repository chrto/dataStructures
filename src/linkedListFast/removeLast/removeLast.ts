import { TNode } from '../linkedList';

function removeLast (): void {
  if (this.size <= 1) {
    this.head = this.tail = null;
    this.size = 0;
    return;
  }

  let currentNode: TNode<any> = this.head;

  while (!!currentNode.next.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = null;
  this.tail = currentNode;
  this.size--;
};

export default removeLast;
