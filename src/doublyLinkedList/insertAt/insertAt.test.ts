import insertAt from './insertAt';
import { expect as expectChai } from 'chai';
import { ListNode, TDoublyLinkedList } from '../doublyLinkedList';
import insertFirst from '../insertFirst/insertFirst';
import insertLast from '../insertLast/insertLast';


describe(`Insert node at position of linked list`, () => {
  let mockDoublyLinkedList: TDoublyLinkedList<number>;

  beforeEach(() => {
    mockDoublyLinkedList = { head: null, tail: null, size: 0, insertFirst, insertLast } as TDoublyLinkedList<number>;
  });

  it('Should not insert item, if inedx is less then zero', () => {
    insertAt.apply(mockDoublyLinkedList, [1, 0]);
    insertAt.apply(mockDoublyLinkedList, [2, -1]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(1);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head)
      .to.be.deep.equal({ prev: null, value: 1, next: null });

    expectChai(mockDoublyLinkedList.tail)
      .to.be.deep.equal({ prev: null, value: 1, next: null });
  });

  it('Should not insert item, if inedx is greater then size', () => {
    insertAt.apply(mockDoublyLinkedList, [1, 0]);
    insertAt.apply(mockDoublyLinkedList, [2, 30]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(1);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head)
      .to.be.deep.equal({ prev: null, value: 1, next: null });

    expectChai(mockDoublyLinkedList.tail)
      .to.be.deep.equal({ prev: null, value: 1, next: null });
  });

  it('Should insert item into first position, if inedx is 0', () => {
    insertAt.apply(mockDoublyLinkedList, [1, 0]);
    insertAt.apply(mockDoublyLinkedList, [2, 0]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(2);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });


  it('Should insert first node into empty Linked List', () => {
    insertAt.apply(mockDoublyLinkedList, [1, 0]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(1);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head)
      .to.be.deep.equal({ prev: null, value: 1, next: null });

    expectChai(mockDoublyLinkedList.tail)
      .to.be.deep.equal({ prev: null, value: 1, next: null });
  });

  it('Should insert last node, if index is equal to size', () => {
    insertAt.apply(mockDoublyLinkedList, [3, 0]);
    insertAt.apply(mockDoublyLinkedList, [2, 1]);
    insertAt.apply(mockDoublyLinkedList, [1, 2]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(3);

    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);


    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.next.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.tail.prev.prev.prev)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.prev.prev)
      .to.be.equal(mockDoublyLinkedList.head);

    expectChai(mockDoublyLinkedList.head.next.next)
      .to.be.equal(mockDoublyLinkedList.tail);
  });

  it('Should insert at exact position betwean 0 and size', () => {
    insertAt.apply(mockDoublyLinkedList, [1, 0]);
    insertAt.apply(mockDoublyLinkedList, [2, 1]);
    insertAt.apply(mockDoublyLinkedList, [3, 2]);
    insertAt.apply(mockDoublyLinkedList, [4, 1]);

    expectChai(mockDoublyLinkedList.size)
      .to.be.equal(4);

    mockDoublyLinkedList.head.next.next.next.value; //?
    expectChai(mockDoublyLinkedList.head)
      .to.be.instanceOf(ListNode);
    expectChai(mockDoublyLinkedList.tail)
      .to.be.instanceOf(ListNode);

    expectChai(mockDoublyLinkedList.head.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.head.next.value)
      .to.be.equal(4);
    expectChai(mockDoublyLinkedList.head.next.next.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.head.next.next.next.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.head.next.next.next.next)
      .to.be.equal(null);

    expectChai(mockDoublyLinkedList.tail.value)
      .to.be.equal(3);
    expectChai(mockDoublyLinkedList.tail.prev.value)
      .to.be.equal(2);
    expectChai(mockDoublyLinkedList.tail.prev.prev.value)
      .to.be.equal(4);
    expectChai(mockDoublyLinkedList.tail.prev.prev.prev.value)
      .to.be.equal(1);
    expectChai(mockDoublyLinkedList.tail.prev.prev.prev.prev)
      .to.be.equal(null);

    // expectChai(mockDoublyLinkedList.tail.prev.prev)
    //   .to.be.equal(mockDoublyLinkedList.head);

    // expectChai(mockDoublyLinkedList.head.next.next)
    //   .to.be.equal(mockDoublyLinkedList.tail);
  });
});
