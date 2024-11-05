import getAt from './getAt';
import { expect as expectChai } from 'chai';
import { TLinkedList, TNode } from '../linkedList';

describe(`Get node from position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeAll(() => {
    const node: TNode<number> = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    mockLinkedList = { head: node, tail: node.next.next, size: 3 } as TLinkedList<number>;
  });

  it('Should return null, if index is less then 0', () => {
    expectChai(getAt.apply(mockLinkedList, [-1]))
      .to.be.equal(null);
  });

  it('Should return null, if index is greater then or equal to size', () => {
    expectChai(getAt.apply(mockLinkedList, [10]))
      .to.be.equal(null);

    expectChai(getAt.apply(mockLinkedList, [3]))
      .to.be.equal(null);
  });

  it('Should return value at specific position', () => {
    expectChai(getAt.apply(mockLinkedList, [0]))
      .to.be.equal(1);

    expectChai(getAt.apply(mockLinkedList, [1]))
      .to.be.equal(2);

    expectChai(getAt.apply(mockLinkedList, [2]))
      .to.be.equal(3);
  });
});
