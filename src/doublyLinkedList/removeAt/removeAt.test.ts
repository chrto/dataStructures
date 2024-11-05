import removeAt from './removeAt';
import { expect as expectChai } from 'chai';
import { ListNode, TDoublyLinkedList, TListNode } from '../doublyLinkedList';

describe(`Get node from position of linked list`, () => {
  let mockDoublyLinkedList: TDoublyLinkedList<number>;

  beforeEach(() => {
    const node1: TListNode<number> = new ListNode(1, null, null);
    const node2: TListNode<number> = new ListNode(2, null, null);
    const node3: TListNode<number> = new ListNode(3, null, null);

    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;

    mockDoublyLinkedList = {
      head: node1,
      tail: node3,
      size: 3
    } as TDoublyLinkedList<number>;
  });

  it('Should not remove item, if index is less then zero', () => {
    const expected: TDoublyLinkedList<number> = mockDoublyLinkedList;
    removeAt.apply(mockDoublyLinkedList, [-1]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(3);

    expectChai(mockDoublyLinkedList)
      .to.be.equal(expected);
  });

  it('Should not remove item, if index is greater then or equal to size', () => {
    const expected: TDoublyLinkedList<number> = mockDoublyLinkedList;
    removeAt.apply(mockDoublyLinkedList, [3]);
    removeAt.apply(mockDoublyLinkedList, [4]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(3);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(3);

    expectChai(mockDoublyLinkedList)
      .to.be.equal(expected);
  });

  it('Should remove node at first position', () => {
    removeAt.apply(mockDoublyLinkedList, [0]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(2);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });

  it('Should remove node at last position', () => {
    removeAt.apply(mockDoublyLinkedList, [2]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(2);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });

  it('Should remove node at specific index', () => {
    removeAt.apply(mockDoublyLinkedList, [1]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(2);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });
});
