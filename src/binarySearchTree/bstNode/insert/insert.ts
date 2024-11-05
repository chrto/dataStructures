import BstNode, { TBstNode } from '../binaryTreeNode';

function insert<T> (value: T): TBstNode<T> {
  if (!this)
    return new BstNode(value)
  if (value < this.value) {
    this.left =  insert.apply(this.left, [value]);
  } else if (value > this.value) {
    this.right = insert.apply(this.right, [value])
  }
  return this;
}
export default insert;
