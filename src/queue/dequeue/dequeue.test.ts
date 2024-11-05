import dequeue from './dequeue';
import getFirst from 'linkedList/getFirst/getFirst';
import removeFirst from 'linkedList/removeFirst/removeFirst';
import { expect as expectChai } from 'chai';
import { TQueue } from 'queue/queue';
import { Node, TLinkedList, TNode } from 'linkedList/linkedList';

describe(`Dequeue values from queue`, () => {
  let mockQueue: TQueue<number>;

  beforeEach(() => {
    const node: TNode<number> = new Node(1, new Node(2, new Node(3)));
    const mockLinkedList: TLinkedList<number> = { head: node, tail: node.next.next, size: 3 } as TLinkedList<number>;

    mockQueue = {
      storage: mockLinkedList,
      head: mockLinkedList.head,
      tail: mockLinkedList.tail,
      size: mockLinkedList.size
    } as TQueue<number>;
    mockQueue.storage.getFirst = getFirst.bind(mockQueue.storage);
    mockQueue.storage.removeFirst = removeFirst.bind(mockQueue.storage);
  });

  it('Should dequeue first value from Queue', () => {
    const result = dequeue.apply(mockQueue);

    expectChai(mockQueue.size)
      .to.be.equal(2);

    expectChai(mockQueue.storage.head)
      .to.be.instanceOf(Node);
    expectChai(mockQueue.storage.tail)
      .to.be.instanceOf(Node);
    expectChai(mockQueue.head)
      .to.be.instanceOf(Node);
    expectChai(mockQueue.tail)
      .to.be.instanceOf(Node);

    expectChai(mockQueue.head)
      .to.be.deep.equal({ value: 2, next: { value: 3, next: null } });
    expectChai(mockQueue.storage.head)
      .to.be.deep.equal({ value: 2, next: { value: 3, next: null } });
    expectChai(mockQueue.tail)
      .to.be.deep.equal({ value: 3, next: null });
    expectChai(mockQueue.storage.tail)
      .to.be.deep.equal({ value: 3, next: null });

    expectChai(result)
      .to.be.an('number')
      .which.is.equal(1);
  });

  it('Should dequeue values from Queue', () => {
    dequeue.apply(mockQueue);
    const result = dequeue.apply(mockQueue);

    expectChai(mockQueue.size)
      .to.be.equal(1);

    expectChai(mockQueue.head)
      .to.be.deep.equal({ value: 3, next: null });
    expectChai(mockQueue.storage.head)
      .to.be.deep.equal({ value: 3, next: null });
    expectChai(mockQueue.tail)
      .to.be.deep.equal({ value: 3, next: null });
    expectChai(mockQueue.storage.tail)
      .to.be.deep.equal({ value: 3, next: null });

    expectChai(result)
      .to.be.an('number')
      .which.is.equal(2);
  });

  it('Should dequeue entire Queue', () => {
    dequeue.apply(mockQueue);
    dequeue.apply(mockQueue);
    dequeue.apply(mockQueue);
    dequeue.apply(mockQueue);
    const result = dequeue.apply(mockQueue);

    expectChai(mockQueue.size)
      .to.be.equal(0);

    expectChai(mockQueue.head)
      .to.be.null;
    expectChai(mockQueue.storage.head)
      .to.be.null;
    expectChai(mockQueue.tail)
      .to.be.null;
    expectChai(mockQueue.storage.tail)
      .to.be.null;

    expectChai(result)
      .to.be.null;
  });
});
