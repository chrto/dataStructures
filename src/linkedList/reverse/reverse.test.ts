import reverse from './reverse';
import { expect as expectChai } from 'chai';
import { TLinkedList, Node } from '../linkedList';

describe(`Print values from linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeEach(() => {
    mockLinkedList = { head: new Node(1, new Node(2, new Node(3))), size: 3 } as TLinkedList<number>;
  });

  it('Should reverse linked list', () => {
    reverse.apply(mockLinkedList)

    expectChai(mockLinkedList.size)
      .to.be.equal(3);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 3, next: { value: 2, next: { value: 1, next: null } } });
  });

});
