import { TBstNode } from '../../binaryTreeNode';

function inorderTraversal<T, ACC> (fcn: (acc: ACC, n: TBstNode<T>) => ACC, init: ACC): ACC {
  let accVal: ACC = init;

  if (this) {
    accVal = inorderTraversal.apply(this.left, [fcn, accVal]);
    accVal = fcn(accVal, this);
    accVal = inorderTraversal.apply(this.right, [fcn, accVal]);
  }
  return accVal;
}

export default inorderTraversal;
