import LinkedList, { TLinkedList, TNode } from 'linkedList/linkedList';
import dequeue from './dequeue/dequeue';
import enqueue from './enqueue/enqueue';

export type TQueue<T> = {
  storage: TLinkedList<T>;
  head: TNode<T>;
  tail: TNode<T>;
  size: number;

  enqueue: (value: T) => void;
  dequeue: () => T;
};

function Queue () {
  this.storage = new LinkedList();
  this.head = this.storage.head;
  this.tail = this.storage.tail;
  this.size = this.storage.size;
}

Queue.prototype.enqueue = enqueue;
Queue.prototype.dequeue = dequeue;

export default Queue;
