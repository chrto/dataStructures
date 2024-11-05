import removeFirst from '../removeFirst/removeFirst';
import removeLast from 'linkedList/removeLast/removeLast';
import { TNode } from '../linkedList';

function removeAt (index: number): void {
  if (index < 0 || index >= this.size)
    return;

  if (index === 0) {
    removeFirst.apply(this);
  } else if (index === this.size - 1){
    removeLast.apply(this);
  } else {
    let counter: number = 0;
    let currNode: TNode<any> = this.head,
      prevNode: TNode<any>;

    while (counter < index) {
      prevNode = currNode;
      currNode = currNode.next;
      counter++;
    }
    prevNode.next = currNode.next;
    this.size--;
  }
};

export default removeAt;
