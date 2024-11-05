function getLast<T> (): T {
  return this.tail?.value || null;
};

export default getLast;
