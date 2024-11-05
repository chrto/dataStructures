function getFirst<T> (): T {
  return this.head?.value || null;
};

export default getFirst;
