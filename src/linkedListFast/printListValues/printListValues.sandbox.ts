import printListValues from './printListValues';
import { TLinkedList, TNode } from '../linkedList';

const node: TNode<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

const linkedList: TLinkedList<number> = {
  head: node
} as TLinkedList<number>;

printListValues.apply(linkedList)
