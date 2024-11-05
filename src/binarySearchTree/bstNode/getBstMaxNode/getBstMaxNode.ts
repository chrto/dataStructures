import { TBstNode } from '../binaryTreeNode';

function getBstMaxNode<T> (): TBstNode<T> {
  if (!!this && !!this.right) {
    return getBstMaxNode.apply(this.right);
  } else {
    return this;
  }
}

export default getBstMaxNode;
