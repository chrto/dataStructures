function isBalanced (): boolean {
  if (!this.root) {
    return true;
  }
  return this.root.isBalanced();
}
export default isBalanced;
