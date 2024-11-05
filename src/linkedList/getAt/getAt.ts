import { TNode } from './../linkedList';

function getAt<T> (index: number): T {
  let node: TNode<T>;
  let counter: number = 0;
  if (index < 0 || index >= this.size)
    return undefined;

  node = this.head;
  while (counter < index) {
    counter++;
    node = node.next;
  }
  return node.value;
};

export default getAt;
