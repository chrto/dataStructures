import { Node } from './../linkedList';

function insertFirst<T> (data: T): void {
  this.head = new Node(data, this.head);
  this.size++;
};

export default insertFirst;
