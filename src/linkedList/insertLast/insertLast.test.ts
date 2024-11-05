import insertLast from './insertLast';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';

describe(`Insert node into last position of linked list`, () => {

  it('Should insert first node into empty Linked List', () => {
    let mockLinkedList: TLinkedList<number> = { head: null, size: 0 } as TLinkedList<number>;
    insertLast.apply(mockLinkedList, [4]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 4, next: null });
  });

  it('Should insert last node into NON empty Linked List', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(4), size: 1 } as TLinkedList<number>;
    insertLast.apply(mockLinkedList, [3]);
    insertLast.apply(mockLinkedList, [2]);
    expectChai(mockLinkedList.size)
      .to.be.equal(3);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 4, next: { value: 3, next: { value: 2, next: null } } });
    expectChai(mockLinkedList.head.next)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head.next)
      .to.be.deep.equal({ value: 3, next: { value: 2, next: null } });
    expectChai(mockLinkedList.head.next.next)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head.next.next)
      .to.be.deep.equal({ value: 2, next: null });
  });
});
