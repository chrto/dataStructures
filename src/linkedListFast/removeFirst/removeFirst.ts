function removeFirst (): void {
  if (!this.head)
    return;

  this.head = this.head.next;
  this.size--;
  if (this.size === 0)
    this.tail = this.head;
};

export default removeFirst;
