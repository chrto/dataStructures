import insertLast from './insertLast';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';

describe(`Insert node into last position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;

  beforeEach(() => {
    mockLinkedList = { head: null, tail: null, size: 0 } as TLinkedList<number>;
  });

  it('Should insert first node into empty Linked List', () => {
    insertLast.apply(mockLinkedList, [4]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 4, next: null });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 4, next: null });
  });

  it('Should insert last node into NON empty Linked List', () => {
    insertLast.apply(mockLinkedList, [3]);
    insertLast.apply(mockLinkedList, [2]);
    insertLast.apply(mockLinkedList, [1]);

    expectChai(mockLinkedList.size)
      .to.be.equal(3);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 3, next: { value: 2, next: { value: 1, next: null } } });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });
});
