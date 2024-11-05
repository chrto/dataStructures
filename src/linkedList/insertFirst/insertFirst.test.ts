import insertFirst from './insertFirst';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';

describe(`Insert node into first position of linked list`, () => {

  it('Should insert first node into empty Linked List', () => {
    let mockLinkedList: TLinkedList<number> = { head: null, size: 0 } as TLinkedList<number>;
    insertFirst.apply(mockLinkedList, [4]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 4, next: null });
  });

  it('Should insert first node into NON empty Linked List', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(4), size: 1 } as TLinkedList<number>;
    insertFirst.apply(mockLinkedList, [1]);
    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 4, next: null } });
    expectChai(mockLinkedList.head.next)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head.next)
      .to.be.deep.equal({ value: 4, next: null });
  });
});
