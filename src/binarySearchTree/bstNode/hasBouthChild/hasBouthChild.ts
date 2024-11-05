import hasLeftChild from '../hasLeftChild/hasLeftChild';
import hasRightChild from '../hasRightChild/hasRightChild';

function hasBouthChild (): boolean {
  return hasLeftChild.apply(this) && hasRightChild.apply(this);
}
export default hasBouthChild;
