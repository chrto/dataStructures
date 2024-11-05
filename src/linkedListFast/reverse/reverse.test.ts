import reverse from './reverse';
import { expect as expectChai } from 'chai';
import { TLinkedList, Node } from '../linkedList';
import insertLast from '../insertLast/insertLast';

describe(`Print values from linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeEach(() => {
    mockLinkedList = { head: null, tail: null, size: 0 } as TLinkedList<number>;
    insertLast.apply(mockLinkedList, [1]);
    insertLast.apply(mockLinkedList, [2]);
    insertLast.apply(mockLinkedList, [3]);
    insertLast.apply(mockLinkedList, [4]);
  });

  it('Should reverse linked list', () => {
    reverse.apply(mockLinkedList);

    expectChai(mockLinkedList.size)
      .to.be.equal(4);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 4, next: { value: 3, next: { value: 2, next: { value: 1, next: null } } } });

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 1, next: null });
  });

  it('Should be same, if reversed twice', () => {
    const expected: TLinkedList<number> = mockLinkedList;
    reverse.apply(mockLinkedList);
    reverse.apply(mockLinkedList);

    expectChai(mockLinkedList.size)
      .to.be.equal(4);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal(expected.head);

    expectChai(mockLinkedList.tail)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal(expected.tail);
  });
});
