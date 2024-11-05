import { TBstNode } from '../binaryTreeNode';
import inorderTraversal from '../traversal/inorder/inorderTraversal';

function getBstMinNode<T> (): TBstNode<T> {
  return inorderTraversal.apply(this, [(acc: TBstNode<T>, node: TBstNode<T>) => !!acc ? acc : (acc = node, acc), null]);
}

export default getBstMinNode;
