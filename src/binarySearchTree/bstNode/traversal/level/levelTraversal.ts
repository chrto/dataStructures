import Queue, { TQueue } from 'queue/queue';
import { TBstNode } from '../../binaryTreeNode';

function levelTraversal<T, ACC> (fcn: (acc: ACC, n: TBstNode<T>) => ACC, init: ACC): ACC {
  let accVal: ACC = init;

  if (this) {
    let node: TBstNode<T> = null;
    let queue: TQueue<TBstNode<T>> = new Queue();
    queue.enqueue(this);

    while (queue.size > 0) {
      node = queue.dequeue();

      if (!!node.left)
        queue.enqueue(node.left);
      if (!!node.right)
        queue.enqueue(node.right);
      accVal = fcn(accVal, node);
    }
  }
  return accVal;
}

export default levelTraversal;
