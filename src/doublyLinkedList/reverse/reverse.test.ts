import reverse from './reverse';
import { expect as expectChai } from 'chai';
import { TDoublyLinkedList, TListNode, ListNode } from '../doublyLinkedList';

describe(`Print values from linked list`, () => {
  let mockDoublyLinkedList: TDoublyLinkedList<number>;
  beforeEach(() => {
    const node1: TListNode<number> = new ListNode(1, null, null);
    const node2: TListNode<number> = new ListNode(2, null, null);
    const node3: TListNode<number> = new ListNode(3, null, null);
    const node4: TListNode<number> = new ListNode(4, null, null);

    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;
    node3.next = node4;
    node4.prev = node3;

    mockDoublyLinkedList = {
      head: node1,
      tail: node4,
      size: 4
    } as TDoublyLinkedList<number>;
  });

  it('Should reverse linked list', () => {
    reverse.apply(mockDoublyLinkedList);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(4);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(4);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.head.next.next.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.next.next.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.next.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.tail.prev.prev.prev.value)
      .to.be.equal(4);
    expectChai(mockDoublyLinkedList.tail.prev.prev.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev.prev.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next.next.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });

  // it('Should be same, if reversed twice', () => {
  //   const expected: TDoublyLinkedList<number> = mockDoublyLinkedList;
  //   reverse.apply(mockDoublyLinkedList);
  //   reverse.apply(mockDoublyLinkedList);

  //   expectChai(mockDoublyLinkedList.size)
  //     .to.be.equal(4);

  //   expectChai(mockDoublyLinkedList.head)
  //     .to.be.instanceOf(ListNode);
  //   expectChai(mockDoublyLinkedList.head)
  //     .to.be.deep.equal(expected.head);

  //   expectChai(mockDoublyLinkedList.tail)
  //     .to.be.instanceOf(ListNode);
  //   expectChai(mockDoublyLinkedList.tail)
  //     .to.be.deep.equal(expected.tail);
  // });
});
