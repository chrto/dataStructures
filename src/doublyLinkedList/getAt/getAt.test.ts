import getAt from './getAt';
import { expect as expectChai } from 'chai';
import { ListNode, TDoublyLinkedList, TListNode } from '../doublyLinkedList';

describe(`Get node from position of linked list`, () => {
  let mockDoublyLinkedList: TDoublyLinkedList<number>;

  beforeAll(() => {
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

  it('Should return undefined, if index is less then 0', () => {
    expectChai(getAt.apply(mockDoublyLinkedList, [-1]))
      .to.be.equal(undefined);
  });

  it('Should return undefined, if index is greater then or equal to size', () => {
    expectChai(getAt.apply(mockDoublyLinkedList, [10]))
      .to.be.equal(undefined);

    expectChai(getAt.apply(mockDoublyLinkedList, [3]))
      .to.be.equal(undefined);
  });

  it('Should return value at specific position', () => {
    expectChai(getAt.apply(mockDoublyLinkedList, [0]))
      .to.be.equal(1);

    expectChai(getAt.apply(mockDoublyLinkedList, [1]))
      .to.be.equal(2);

    expectChai(getAt.apply(mockDoublyLinkedList, [2]))
      .to.be.equal(3);
  });
});
