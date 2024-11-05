import { TListNode } from '../doublyLinkedList';

function getAt<T> (index: number): T {
  let node: TListNode<T>;
  let counter: number = 0;

  if (index < 0 || index >= this.size)
    return undefined;

  node = this.head;
  while (true) {
    if (index === counter) {
      return node.value;
    }
    node = node.next;
    counter++;
  }
};

export default getAt;
