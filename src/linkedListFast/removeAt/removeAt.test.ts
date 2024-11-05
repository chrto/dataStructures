import removeAt from './removeAt';
import { expect as expectChai } from 'chai';
import { Node, TLinkedList, TNode } from '../linkedList';

describe(`Remove node from position of linked list`, () => {
  let mockLinkedList: TLinkedList<number>;
  beforeEach(() => {
    const node: TNode<Number> = new Node(1, new Node(2, new Node(3)));
    mockLinkedList = { head: node, tail: node.next.next, size: 3 } as TLinkedList<number>;
  });

  it('Should not remove item, if index is less then zero', () => {
    removeAt.apply(mockLinkedList, [-1]);

    expectChai(mockLinkedList.size)
      .to.be.equal(3);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: { value: 3, next: null } } });
  });

  it('Should not remove item, if index is greater then or equal to size', () => {
    removeAt.apply(mockLinkedList, [3]);
    removeAt.apply(mockLinkedList, [4]);

    expectChai(mockLinkedList.size)
      .to.be.equal(3);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: { value: 3, next: null } } });
  });

  it('Should remove node at specific index', () => {
    removeAt.apply(mockLinkedList, [0]);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 2, next: { value: 3, next: null } });
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 3, next: null });
  });

  it('Should remove node at specific index', () => {
    removeAt.apply(mockLinkedList, [1]);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 3, next: null } });
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 3, next: null });
  });

  it('Should remove node at specific index', () => {
    removeAt.apply(mockLinkedList, [2]);

    expectChai(mockLinkedList.size)
      .to.be.equal(2);

    expectChai(mockLinkedList.head)
      .to.be.instanceOf(Node);
    expectChai(mockLinkedList.head)
      .to.be.deep.equal({ value: 1, next: { value: 2, next: null } });
    expectChai(mockLinkedList.tail)
      .to.be.deep.equal({ value: 2, next: null });
  });

  it('Should remove nodes from linked list', () => {
    removeAt.apply(mockLinkedList, [2]);
    removeAt.apply(mockLinkedList, [1]);
    removeAt.apply(mockLinkedList, [1]);
    removeAt.apply(mockLinkedList, [0]);
    removeAt.apply(mockLinkedList, [0]);
    removeAt.apply(mockLinkedList, [0]);

    expectChai(mockLinkedList.size)
      .to.be.equal(0);
    expectChai(mockLinkedList.head)
      .to.be.null;
    expectChai(mockLinkedList.tail)
      .to.be.null;
  });

});
