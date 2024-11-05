import insertAt from './insertAt';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';
import insertFirst from '../insertFirst/insertFirst';

describe(`Insert node at position of linked list`, () => {

  it('Should not insert item, if inedx is less then zero', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(1), size: 1 } as TLinkedList<number>;
    insertAt.apply(mockLinkedList, [2, -1]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should not insert item, if inedx is greater then size', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(1), size: 1 } as TLinkedList<number>;
    insertAt.apply(mockLinkedList, [2, 5]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should insert item into first position, if inedx is 0', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(1), size: 1, insertFirst } as TLinkedList<number>;
    insertAt.apply(mockLinkedList, [2, 0]);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 2, next: { value: 1, next: null } });
  });


  it('Should insert first node into empty Linked List', () => {
    let mockLinkedList: TLinkedList<number> = { head: null, size: 0, insertFirst } as TLinkedList<number>;
    insertAt.apply(mockLinkedList, [1, 0]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should insert last node, if index is equal to size', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(4), size: 1 } as TLinkedList<number>;
    insertAt.apply(mockLinkedList, [3, 1]);
    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 4, next: { value: 3, next: null } });

    expectChai(mockLinkedList.head.next)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head.next)
      .to.be.deep.equal({ value: 3, next: null });
  });

  it('Should insert at exact position betwean 0 and size', () => {
    let mockLinkedList: TLinkedList<number> = { head: new Node(1, new Node(5, new Node(6))), size: 3 } as TLinkedList<number>;
    insertAt.apply(mockLinkedList, [2, 1]);
    expectChai(mockLinkedList.size)
      .to.be.equal(4);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: { value: 5, next: { value: 6, next: null } } } });

    expectChai(mockLinkedList.head.next)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head.next)
      .to.be.deep.equal({ value: 2, next: { value: 5, next: { value: 6, next: null } } });

    expectChai(mockLinkedList.head.next.next)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head.next.next)
      .to.be.deep.equal({ value: 5, next: { value: 6, next: null } });
  });
});
