function nodeHeight (): number {
  if (!this) {
    return -1;
  } else {
    const leftHeight: number = nodeHeight.apply(this.left);
    const rightHeight: number = nodeHeight.apply(this.right);
    return (rightHeight > leftHeight ? rightHeight : leftHeight) + 1;
  }
}

export default nodeHeight;
