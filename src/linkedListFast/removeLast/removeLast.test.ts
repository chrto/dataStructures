import removeLast from './removeLast';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList, TNode } from '../linkedList';

describe(`Remove node from the end of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeEach(() => {
    const node: TNode<Number> = new Node(1, new Node(2, new Node(3)));
    mockLinkedList = { head: node, tail: node.next.next, size: 3 } as TLinkedList<number>;
  });

  it('Should remove last item from linked list', () => {
    removeLast.apply(mockLinkedList, []);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: null } });
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 2, next: null });
  });

  it('Should remove all items from linked list', () => {
    removeLast.apply(mockLinkedList, []);
    removeLast.apply(mockLinkedList, []);
    removeLast.apply(mockLinkedList, []);
    removeLast.apply(mockLinkedList, []);
    removeLast.apply(mockLinkedList, []);
    // removeLast.apply(mockLinkedList, []);


    expectChai(mockLinkedList.size)
      .to.be.equal(0);

    expectChai(mockLinkedList.head)
      .to.be.null;
    expectChai(mockLinkedList.tail)
      .to.be.null;
  });
});
