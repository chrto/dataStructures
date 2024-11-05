function isFull (): boolean {
  if (!this.root) {
    return false;
  }
  return this.root.isFull();
}
export default isFull;
