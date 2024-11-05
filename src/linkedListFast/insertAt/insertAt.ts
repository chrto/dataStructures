import { Node, TNode } from '../linkedList';

function insertAt<T> (data: T, index: number): void {
  let position: number = 0;
  let currentNode: TNode<T>, prevNode: TNode<T>;

  if (index === 0) {
    this.insertFirst(data);
  } else if (index === this.size) {
    this.insertLast(data);
  } else if (index > 0 && index < this.size) {
    currentNode = this.head;
    while (position < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      position++;
    }
    prevNode.next = new Node(data, currentNode);
    this.size++;
  }
};

export default insertAt;
