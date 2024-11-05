import clearList from './clearList';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList } from '../linkedList';

describe(`Get node from position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeEach(() => {
    mockLinkedList = { head: new Node(1, new Node(2, new Node(3))), size: 3 } as TLinkedList<number>;
  });

  it('Should remove all items from the list', () => {
    clearList.apply(mockLinkedList);

    expectChai(mockLinkedList.size)
      .to.be.equal(0);

    expectChai(mockLinkedList.head)
      .to.be.equal(null);
  });
});
