import insertFirst from './insertFirst';
import { expect as expectChai } from 'chai';
import { ListNode, TDoublyLinkedList } from '../doublyLinkedList';

describe(`Insert node into first position of dobuly linked list`, () => {
  let mockDoublyLinkedList: TDoublyLinkedList<number>;

  beforeEach(() => {
    mockDoublyLinkedList = { head: null, tail: null, size: 0 } as TDoublyLinkedList<number>;
  });

  it('Should insert first node into empty Doubly Linked List', () => {
    insertFirst.apply(mockDoublyLinkedList, [1]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(1);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head)
      .to.be.deep.equal({ prev: null, value: 1, next: null });

    expectChai(mockDoublyLinkedList.tail)
      .to.be.deep.equal({ prev: null, value: 1, next: null });
  });

  it('Should insert first node into NON empty Doubled Linked List', () => {
    insertFirst.apply(mockDoublyLinkedList, [1]);
    insertFirst.apply(mockDoublyLinkedList, [2]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(2);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });

  it('Should insert first node into NON empty Linked List', () => {
    insertFirst.apply(mockDoublyLinkedList, [1]);
    insertFirst.apply(mockDoublyLinkedList, [2]);
    insertFirst.apply(mockDoublyLinkedList, [3]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(3);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.next.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.tail.prev.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });
});
