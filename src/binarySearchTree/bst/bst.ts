import { TBstNode } from 'binarySearchTree/bstNode/binaryTreeNode';
import getNode from './getNode/getNode';
import hasNode from './hasNode/hasNode';
import insert from './insert/insert';
import isBalanced from './isBalanced/isBalanced';
import isFull from './isFull/isFull';
import remove from './remove/remove';

export type TBst<T> = {
  root: TBstNode<T>;

  insert: <T>(v: T) => void;
  remove: <T>(v: T) => void;
  getNode: <T>(v: T) => TBstNode<T>;
  hasNode: <T>(v: T) => boolean;
  isBalanced: () => boolean;
  isFull: () => boolean;
};

const Bst: () => void = function () {
  this.root = null;
};

Bst.prototype.insert = insert;
Bst.prototype.remove = remove;
Bst.prototype.getNode = getNode;
Bst.prototype.hasNode = hasNode;
Bst.prototype.isBalanced = isBalanced;
Bst.prototype.isFull = isFull;

export default Bst;
