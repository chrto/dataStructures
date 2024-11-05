function enqueue<T> (value: T): void {
  this.storage.insertLast(value);
  if (!this.head)
    this.head = this.storage.head;

  this.tail = this.storage.tail;
  this.size = this.storage.size;
};

export default enqueue;
