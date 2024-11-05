import getLast from './getLast';
import { expect as expectChai } from 'chai';
import { TLinkedList, TNode } from '../linkedList';

describe(`Get node from head of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeAll(() => {
    const node: TNode<number> = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    mockLinkedList = { head: node, tail: node.next.next, size: 3 } as TLinkedList<number>;
  });

  it('Should return null, if linked list is empty', () => {
    expectChai(getLast.apply({ head: null, tail: null, size: 0 }, [-1]))
      .to.be.equal(null);
  });


  it('Should return value from tail of linked list', () => {
    expectChai(getLast.apply(mockLinkedList))
      .to.be.equal(3);
  });
});
