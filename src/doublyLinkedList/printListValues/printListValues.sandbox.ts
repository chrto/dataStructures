import printListValues from './printListValues';
import { ListNode, TDoublyLinkedList, TListNode } from '../doublyLinkedList';

const node1: TListNode<number> = new ListNode(1, null, null);
const node2: TListNode<number> = new ListNode(2, null, null);
const node3: TListNode<number> = new ListNode(3, null, null);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

const doubleLinkedList: TDoublyLinkedList<number> = {
  head: node1,
  tail: node3,
  size: 3
} as TDoublyLinkedList<number>;

printListValues.apply(doubleLinkedList);
