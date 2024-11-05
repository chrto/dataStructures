import { TBstNode } from '../binaryTreeNode';

function getNode<T> (value: T): TBstNode<T> {
  if (!this || value === this.value) {
    return this;
  } else if (value < this.value) {
    return getNode.apply(this.left, [value]);
  } else {
    return getNode.apply(this.right, [value]);
  }
}
export default getNode;
