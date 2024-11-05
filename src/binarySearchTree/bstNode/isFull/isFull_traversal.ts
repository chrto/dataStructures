import preorderTraversal from '../traversal/preorder/preorderTraversal';
import { TBstNode } from '../binaryTreeNode';
import hasBouthChild from '../hasBouthChild/hasBouthChild';
import isLeaf from '../isLeaf/isLeaf';

const full = <T> (acc: boolean, node: TBstNode<T>): boolean =>
  acc && (hasBouthChild.apply(node) || isLeaf.apply(node));

function isBalanced (): boolean {
  return preorderTraversal.apply(this, [full, true]);
}

export default isBalanced;
