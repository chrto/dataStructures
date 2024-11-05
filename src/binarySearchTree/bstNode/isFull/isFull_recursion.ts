import hasBouthChild from '../hasBouthChild/hasBouthChild';
import isLeaf from '../isLeaf/isLeaf';

function isFull (): boolean {
  if (!this) {
    return true;
  } else {
    return ((hasBouthChild.apply(this)) || (isLeaf.apply(this))) &&
      isFull.apply(this.left) &&
      isFull.apply(this.right);
  }
}

export default isFull;
