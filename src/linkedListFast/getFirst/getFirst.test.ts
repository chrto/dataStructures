import getFirst from './getFirst';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';

describe(`Get node from head of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeAll(() => {
    mockLinkedList = { head: new Node(1, new Node(2, new Node(3))), size: 3 } as TLinkedList<number>;
  });

  it('Should return null, if linked list is empty', () => {
    expectChai(getFirst.apply({head: null, tail: null, size: 0}, [-1]))
      .to.be.equal(null);
  });


  it('Should return value from head of linked list', () => {
    expectChai(getFirst.apply(mockLinkedList))
      .to.be.equal(1);
  });
});
