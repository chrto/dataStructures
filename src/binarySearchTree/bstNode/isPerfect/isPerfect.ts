import { TBstNode } from '../binaryTreeNode';
import inorderTraversal from '../traversal/inorder/inorderTraversal';
import isLeaf from '../isLeaf/isLeaf';
import nodeHeight from '../nodeHeight/nodeHeight';

const countLeafs = <T> (acc: number, node: TBstNode<T>): number =>
  isLeaf.apply(node)
    ? (acc++, acc)
    : (acc);

/*
  Perfect binary tree of height h has 2^(h + 1) – 1 nodes,
  the height is Θ(ln(n)), and the number of leaf nodes is 2h or (n + 1)/2.
*/
function isPerfect (): boolean {
  const leafs: number = inorderTraversal.apply(this, [countLeafs, 0]);
  const height: number = nodeHeight.apply(this);

  return leafs === 2 ** height;
}

export default isPerfect;
