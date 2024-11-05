function remove<T> (value: T): void {
  if (!this.root) {
    return;
  } else {
    this.root = this.root.remove(value);
  }
}

export default remove;
