import removeFirst from './removeFirst';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList, TNode } from '../linkedList';

describe(`Remove node from first position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeEach(() => {
    const node: TNode<number> = new Node(1, new Node(2, new Node(3)));
    mockLinkedList = { head: node, tail: node.next.next, size: 3 } as TLinkedList<number>;
  });

  it('Should remove first node', () => {
    removeFirst.apply(mockLinkedList);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 2, next: { value: 3, next: null } });
  });

  it('Should remove nodes from linked list', () => {
    removeFirst.apply(mockLinkedList);
    removeFirst.apply(mockLinkedList);
    removeFirst.apply(mockLinkedList);
    removeFirst.apply(mockLinkedList);
    removeFirst.apply(mockLinkedList);

    expectChai(mockLinkedList.size)
      .to.be.equal(0);
    expectChai(mockLinkedList.head)
      .to.be.null;
    expectChai(mockLinkedList.tail)
      .to.be.null;
  });
});
