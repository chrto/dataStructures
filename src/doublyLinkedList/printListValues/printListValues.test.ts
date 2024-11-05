import printListValuesUnbound from './printListValues.unbound';
import { ListNode, TDoublyLinkedList, TListNode } from '../doublyLinkedList';

describe(`Print values from linked list`, () => {
  let printValue: jest.Mock<void, [any]>;
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

    printValue = jest.fn().mockReturnValue(null);
    printListValuesUnbound
      .apply(null, [printValue])
      .apply(mockDoublyLinkedList, []);
  });


  it('Should call printValue function 3 times', () => {
    expect(printValue)
      .toHaveBeenCalledTimes(3);
  });
  it('Should call printValue function with exact parameters', () => {
    expect(printValue)
      .toHaveBeenNthCalledWith(1, 1);
    expect(printValue)
      .toHaveBeenNthCalledWith(2, 2);
    expect(printValue)
      .toHaveBeenNthCalledWith(3, 3);
  });
});
