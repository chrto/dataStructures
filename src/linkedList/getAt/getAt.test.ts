import getAt from './getAt';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';

describe(`Get node from position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeAll(() => {
    mockLinkedList = { head: new Node(1, new Node(2, new Node(3))), size: 3 } as TLinkedList<number>;
  });

  it('Should return undefined, if index is less then 0', () => {
    expectChai(getAt.apply(mockLinkedList, [-1]))
      .to.be.equal(undefined);
  });

  it('Should return undefined, if index is greater then or equal to size', () => {
    expectChai(getAt.apply(mockLinkedList, [10]))
      .to.be.equal(undefined);

    expectChai(getAt.apply(mockLinkedList, [3]))
      .to.be.equal(undefined);
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
