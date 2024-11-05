import insertAt from './insertAt';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';
import insertFirst from '../insertFirst/insertFirst';
import insertLast from '../insertLast/insertLast';

describe(`Insert node at position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;

  beforeEach(() => {
    mockLinkedList = { head: null, tail: null, size: 0, insertFirst, insertLast } as TLinkedList<number>;
  });

  it('Should not insert item, if inedx is less then zero', () => {
    insertAt.apply(mockLinkedList, [1, 0]);
    insertAt.apply(mockLinkedList, [2, -1]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: null });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should not insert item, if inedx is greater then size', () => {
    insertAt.apply(mockLinkedList, [1, 0]);
    insertAt.apply(mockLinkedList, [2, 30]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: null });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should insert item into first position, if inedx is 0', () => {
    insertAt.apply(mockLinkedList, [1, 0]);
    insertAt.apply(mockLinkedList, [2, 0]);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 2, next: { value: 1, next: null } });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });


  it('Should insert first node into empty Linked List', () => {
    insertAt.apply(mockLinkedList, [1, 0]);

    expectChai(mockLinkedList.size)
      .to.be.equal(1);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: null });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should insert last node, if index is equal to size', () => {
    insertAt.apply(mockLinkedList, [1, 0]);
    insertAt.apply(mockLinkedList, [2, 1]);
    insertAt.apply(mockLinkedList, [3, 2]);

    expectChai(mockLinkedList.size)
      .to.be.equal(3);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: { value: 3, next: null } } });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 3, next: null });
  });

  it('Should insert at exact position betwean 0 and size', () => {
    insertAt.apply(mockLinkedList, [1, 0]);
    insertAt.apply(mockLinkedList, [2, 1]);
    insertAt.apply(mockLinkedList, [3, 2]);
    insertAt.apply(mockLinkedList, [4, 1]);

    expectChai(mockLinkedList.size)
      .to.be.equal(4);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 4, next: { value: 2, next: { value: 3, next: null } } } });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 3, next: null });
  });
});
