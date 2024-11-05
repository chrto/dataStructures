import { TNode } from '../linkedList';


export default (printValue: (data: any) => void) =>
  function () {
    let node: TNode<any> = this.head;
    while (node) {
      printValue(node.value);
      node = node.next;
    }
  };
