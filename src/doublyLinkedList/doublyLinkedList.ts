import clearList from './clearList/clearList';
import getAt from './getAt/getAt';
import insertAt from './insertAt/insertAt';
import insertFirst from './insertFirst/insertFirst';
import insertLast from './insertLast/insertLast';
import printListValues from './printListValues/printListValues';
import removeAt from './removeAt/removeAt';
import reverse from './reverse/reverse';

export type TListNode<T> = {
  value: T;
  next: TListNode<T>;
  prev: TListNode<T>;
};

export const ListNode: <T>(val: T, prevNode?: TListNode<T>, nextNode?: TListNode<T>) => void = function (val, prevNode = null, nextNode = null) {
  this.value = val;
  this.next = nextNode;
  this.prev = prevNode;

  if (prevNode)
    prevNode.next = this;
  if (nextNode)
    nextNode.prev = this;
};

export type TDoublyLinkedList<T> = {
  head: TListNode<T>;
  tail: TListNode<T>;
  size: number;

  insertFirst: <T>(data: T) => void;
  insertLast: <T>(data: T) => void;
  insertAt: <T>(data: T, index: number) => void;
  getAt: <T>(index: number) => T;
  removeAt: (index: number) => void;
  clearList: () => void;
  printListValues: () => void;
  reverse: () => void;
};

const LinkedList: () => void = function () {
  this.head = this.tail = null;
  this.size = 0;
};

LinkedList.prototype.insertFirst = insertFirst;
LinkedList.prototype.insertLast = insertLast;
LinkedList.prototype.insertAt = insertAt;
LinkedList.prototype.getAt = getAt;
LinkedList.prototype.removeAt = removeAt;
LinkedList.prototype.clearList = clearList;
LinkedList.prototype.reverse = reverse;
LinkedList.prototype.printListValues = printListValues;

export default LinkedList;
