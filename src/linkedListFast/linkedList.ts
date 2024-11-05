import clearList from './clearList/clearList';
import getAt from './getAt/getAt';
import getFirst from './getFirst/getFirst';
import getLast from './getLast/getLast';
import insertAt from './insertAt/insertAt';
import insertFirst from './insertFirst/insertFirst';
import insertLast from './insertLast/insertLast';
import printListValues from './printListValues/printListValues';
import removeAt from './removeAt/removeAt';
import removeFirst from './removeFirst/removeFirst';
import removeLast from './removeLast/removeLast';
import reverse from './reverse/reverse';

export type TNode<T> = {
  value: T;
  next: TNode<T>;
};

export const Node: <T>(val: T, nextNode?: TNode<T>) => void = function (val, nextNode = null) {
  this.value = val;
  this.next = nextNode;
};

export type TLinkedList<T> = {
  head: TNode<T>;
  tail: TNode<T>;
  size: number;

  insertFirst: <T>(data: T) => void;
  insertLast: <T>(data: T) => void;
  insertAt: <T>(data: T, index: number) => void;
  getAt: <T>(index: number) => T;
  removeAt: (index: number) => void;
  removeFirst: () => void;
  removeLast: () => void;
  clearList: () => void;
  printListValues: () => void;
  reverse: () => void;
  getFirst: <T>() => T;
  getLast: <T>() => T;
};

const LinkedList: () => void = function () {
  this.head = this.tail = null;
  this.size = 0;
};

LinkedList.prototype.insertFirst = insertFirst;
LinkedList.prototype.insertLast = insertLast;
LinkedList.prototype.insertAt = insertAt;
LinkedList.prototype.getFirst = getFirst;
LinkedList.prototype.getLast = getLast;
LinkedList.prototype.getAt = getAt;
LinkedList.prototype.removeFirst = removeFirst;
LinkedList.prototype.removeLast = removeLast;
LinkedList.prototype.removeAt = removeAt;
LinkedList.prototype.clearList = clearList;
LinkedList.prototype.reverse = reverse;
LinkedList.prototype.printListValues = printListValues;

export default LinkedList;
