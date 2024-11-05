function enqueue<T> (): T {
  if (this.size === 0)
    return null;

  const value: T = this.storage.getFirst();

  this.storage.removeFirst();
  this.head = this.storage.head;
  this.size = this.storage.size;
  if (!this.storage.tail)
    this.tail = null;

  return value;
};

export default enqueue;
