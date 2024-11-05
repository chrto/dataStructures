import { TListNode } from '../doublyLinkedList';


export default (printValue: (data: any) => void) =>
  function () {
    let node: TListNode<any> = this.head;
    while (node) {
      printValue(node.value);
      node = node.next;
    }
  };
