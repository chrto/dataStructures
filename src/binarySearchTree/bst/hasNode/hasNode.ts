import getNode from '../getNode/getNode';

function hasNode<T> (value: T): boolean {
  if (!this.root) {
    return false;
  }
  return !!getNode.apply(this, [value]);
}
export default hasNode;
