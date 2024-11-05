import getBstMaxNode from './getBstMaxNode/getBstMaxNode';
import getBstMinNode from './getBstMinNode/getBstMinNode';
import isBalanced from './isBalanced/isBalanced';
import isFull from './isFull/isFull';
import nodeHeight from './nodeHeight/nodeHeight';
import inorderTraversal from './traversal/inorder/inorderTraversal';
import postorderTraversal from './traversal/postorder/postorderTraversal';
import preorderTraversal from './traversal/preorder/preorderTraversal';
import hasLeftChild from './hasLeftChild/hasLeftChild';
import hasRightChild from './hasRightChild/hasRightChild';
import insert from './insert/insert';
import isLeaf from './isLeaf/isLeaf';
import remove from './remove/remove';
import hasBouthChild from './hasBouthChild/hasBouthChild';
import getNode from './getNode/getNode';
import isPerfect from './isPerfect/isPerfect';
import isComplete from './isComplete/isComplete';
import levelTraversal from './traversal/level/levelTraversal';

export type TBstNode<T> = {
  value: T;
  left: TBstNode<T>;
  right: TBstNode<T>;

  insert: <T>(value: T) => void;
  remove: <T>(value: T, parent: TBstNode<T>) => void;
  getNode: <T>(value: T) => TBstNode<T>;
  isLeaf: () => boolean;
  hasLeftChild: () => boolean;
  hasRightChild: () => boolean;
  hasBouthChild: () => boolean;
  getBstMinNode: <T>() => TBstNode<T>;
  getBstMaxNode: <T>() => TBstNode<T>;
  nodeHeight: () => number;
  isBalanced: () => boolean;
  isFull: () => boolean;
  isPerfect: () => boolean;
  isComplete: () => boolean;

  // ---
  inorderTraversal: <T, ACC> (fcn: (acc: ACC, n: T) => ACC, init: ACC) => ACC;
  preorderTraversal: <T, ACC> (fcn: (acc: ACC, n: T) => ACC, init: ACC) => ACC;
  postorderTraversal: <T, ACC> (fcn: (acc: ACC, n: T) => ACC, init: ACC) => ACC;
  levelTraversal: <T, ACC> (fcn: (acc: ACC, n: T) => ACC, init: ACC) => ACC;
};

function BstNode<T> (val: T, leftNode: TBstNode<T> = null, rightNode: TBstNode<T> = null): void {
  this.value = val;
  this.left = leftNode;
  this.right = rightNode;
};

BstNode.prototype.insert = insert;
BstNode.prototype.remove = remove;
BstNode.prototype.getNode = getNode;
BstNode.prototype.isLeaf = isLeaf;
BstNode.prototype.hasLeftChild = hasLeftChild;
BstNode.prototype.hasRightChild = hasRightChild;
BstNode.prototype.hasBouthChild = hasBouthChild;
BstNode.prototype.getBstMinNode = getBstMinNode;
BstNode.prototype.getBstMaxNode = getBstMaxNode;
BstNode.prototype.nodeHeight = nodeHeight;
BstNode.prototype.isBalanced = isBalanced;
BstNode.prototype.isFull = isFull;
BstNode.prototype.isPerfect = isPerfect;
BstNode.prototype.isComplete = isComplete;
BstNode.prototype.inorderTraversal = inorderTraversal;
BstNode.prototype.preorderTraversal = preorderTraversal;
BstNode.prototype.postorderTraversal = postorderTraversal;
BstNode.prototype.levelTraversal = levelTraversal;

export default BstNode;
