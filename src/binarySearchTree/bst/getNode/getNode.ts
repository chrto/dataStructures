import { TBstNode } from 'binarySearchTree/bstNode/binaryTreeNode';

function getNode<T> (value: T): TBstNode<T> {
  if (!this.root) {
    return null;
  }
  return this.root.getNode(value);
}
export default getNode;
