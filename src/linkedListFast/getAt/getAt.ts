import getFirst from '../getFirst/getFirst';
import getLast from '../getLast/getLast';
import { TNode } from '../linkedList';

function getAt<T> (index: number): T {
  let node: TNode<T>;
  let counter: number = 0;
  if (index < 0 || index >= this.size)
    return null;
  else if (index === 0)
    return getFirst.apply(this);
  else if (index === this.size - 1)
    return getLast.apply(this);

  node = this.head;
  while (counter < index) {
    counter++;
    node = node.next;
  }
  return node.value;
};

export default getAt;
