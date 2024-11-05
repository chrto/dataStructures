import { Node, TNode } from './../linkedList';

function insertLast<T> (data: T): void {
  let node: TNode<T>;
  if (!this.head) {
    this.head = new Node(data);
  } else {
    node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
  }
  this.size++;
};

export default insertLast;
