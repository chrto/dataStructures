import hasBouthChild from '../hasBouthChild/hasBouthChild';
import hasLeftChild from '../hasLeftChild/hasLeftChild';
import isLeaf from '../isLeaf/isLeaf';
import isPerfect from '../isPerfect/isPerfect';
import nodeHeight from '../nodeHeight/nodeHeight';

/*
  A Binary Tree is complete Binary Tree if all levels are completely filled
  except possibly the last level and the last level has all keys as left as possible.
*/
function isComplete (): boolean {
  if (hasBouthChild.apply(this)) {
    const heightDiff: number = nodeHeight.apply(this.left) - nodeHeight.apply(this.right);
    if (heightDiff === 0) {
      return isPerfect.apply(this.left) && isComplete.apply(this.right);
    } else if (heightDiff === 1) {
      return isPerfect.apply(this.right) && isComplete.apply(this.left);
    } else {
      return false;
    }
  }
  return isLeaf.apply(this) || hasLeftChild.apply(this)
}

export default isComplete;
