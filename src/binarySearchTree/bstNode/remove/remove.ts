import getBstMaxNode from '../getBstMaxNode/getBstMaxNode';
import isLeaf from '../isLeaf/isLeaf';
import { TBstNode } from '../binaryTreeNode';
import hasBouthChild from '../hasBouthChild/hasBouthChild';

function remove<T> (value: T): TBstNode<T> {
  if (!this)
    return this;
  if (value < this.value) {
    this.left = remove.apply(this.left, [value]);
  } else if (value > this.value) {
    this.right = remove.apply(this.right, [value]);
  } else if (value === this.value) {
    if (hasBouthChild.apply(this)) {
      const maxLeftNode = getBstMaxNode.apply(this.left);
      this.value = maxLeftNode.value;
      this.left = remove.apply(this.left, [maxLeftNode.value]);
    } else if (isLeaf.apply(this)) {
      return null;
    } else {
      return this.left || this.right;
    }
  }
  return this;
}
export default remove;
