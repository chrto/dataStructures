import { TBstNode } from '../binaryTreeNode';

function getBstMinNode<T> (): TBstNode<T> {
  if (!!this && !!this.left) {
    return getBstMinNode.apply(this.left);
  }
  return this;
}

export default getBstMinNode;
