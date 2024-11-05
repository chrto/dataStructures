import preorderTraversal from '../traversal/preorder/preorderTraversal';
import nodeHeight from '../nodeHeight/nodeHeight';
import { TBstNode } from '../binaryTreeNode';

const balanced = <T> (acc: boolean, node: TBstNode<T>): boolean =>
  acc && Math.abs(nodeHeight.apply(node.left) - nodeHeight.apply(node.right)) <= 1;

function isBalanced (): boolean {
  return preorderTraversal.apply(this, [balanced, true]);
}

export default isBalanced;
