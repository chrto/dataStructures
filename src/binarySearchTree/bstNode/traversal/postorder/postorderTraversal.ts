import { TBstNode } from '../../binaryTreeNode';

function preorderTraversal<T, ACC> (fcn: (acc: ACC, node: TBstNode<T>) => ACC, init: ACC): ACC {
  let accVal: ACC = init;

  if (this) {
    accVal = preorderTraversal.apply(this.left, [fcn, accVal]);
    accVal = preorderTraversal.apply(this.right, [fcn, accVal]);
    accVal = fcn(accVal, this);
  }
  return accVal;
}

export default preorderTraversal;
