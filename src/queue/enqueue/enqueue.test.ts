import enqueue from './enqueue';
import { expect as expectChai } from 'chai';
import { TQueue } from 'queue/queue';
import { Node, TLinkedList } from 'linkedList/linkedList';
import insertLast from 'linkedList/insertLast/insertLast';

describe(`Enqueue values into queue`, () => {
  let mockQueue: TQueue<number>;

  beforeEach(() => {
    mockQueue = {
      storage: {
        head: null,
        tail: null,
        size: 0
      } as TLinkedList<number>,
      head: null,
      tail: null,
      size: 0
    } as TQueue<number>;
    mockQueue.storage.insertLast = insertLast.bind(mockQueue.storage);
  });

  it('Should enqueue first value into empty Queue', () => {
    enqueue.apply(mockQueue, [1]);

    expectChai(mockQueue.size)
      .to.be.equal(1);

    expectChai(mockQueue.storage.head)
      .to.be.instanceOf(Node);
    expectChai(mockQueue.storage.tail)
      .to.be.instanceOf(Node);
    expectChai(mockQueue.head)
      .to.be.instanceOf(Node);
    expectChai(mockQueue.tail)
      .to.be.instanceOf(Node);

    expectChai(mockQueue.head)
      .to.be.deep.equal({ value: 1, next: null });
    expectChai(mockQueue.storage.head)
      .to.be.deep.equal({ value: 1, next: null });
    expectChai(mockQueue.tail)
      .to.be.deep.equal({ value: 1, next: null });
    expectChai(mockQueue.storage.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should enqueue valuee into Queue', () => {
    enqueue.apply(mockQueue, [1]);
    enqueue.apply(mockQueue, [2]);
    enqueue.apply(mockQueue, [3]);

    expectChai(mockQueue.size)
      .to.be.equal(3);
    expectChai(mockQueue.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: { value: 3, next: null } } });
    expectChai(mockQueue.tail)
      .to.be.deep.equal({ value: 3, next: null });
  });
});
