import clearList from './clearList';
import { expect as expectChai } from 'chai';
import { ListNode, TDoublyLinkedList, TListNode } from '../doublyLinkedList';

describe(`Get node from position of linked list`, () => {
  let mockDoublyLinkedList: TDoublyLinkedList<number>;

  beforeAll(() => {
    const node1: TListNode<number> = new ListNode(1, null, null);
    const node2: TListNode<number> = new ListNode(2, null, null);
    const node3: TListNode<number> = new ListNode(3, null, null);

    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;

    mockDoublyLinkedList = {
      head: node1,
      tail: node3,
      size: 3
    } as TDoublyLinkedList<number>;
  });

  it('Should remove all items from the list', () => {
    clearList.apply(mockDoublyLinkedList);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(0);

    expectChai(mockDoublyLinkedList.head)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail)
      .to.be.equal(null);
  });
});
