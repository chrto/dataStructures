import BstNode from 'binarySearchTree/bstNode/binaryTreeNode';

function insert<T> (value: T): void {
  if (!this.root) {
    this.root = new BstNode(value)
  } else {
    this.root.insert(value);
  }
}
export default insert;
