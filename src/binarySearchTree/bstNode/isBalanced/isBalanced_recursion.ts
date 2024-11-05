import nodeHeight from '../nodeHeight/nodeHeight';

function isBalanced (): boolean {
  if (!this) {
    return true;
  } else {
    const leftHeight: number = nodeHeight.apply(this.left);
    const rightHeight: number = nodeHeight.apply(this.right);
    return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced.apply(this.left) && isBalanced.apply(this.right);
  }
}

export default isBalanced;
