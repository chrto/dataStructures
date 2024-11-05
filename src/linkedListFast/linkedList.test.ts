import LinkedList, { TLinkedList, Node, TNode } from './linkedList';
import { expect as expectChai } from 'chai';

describe(`'Node' data structure implementation.`, () => {

  it('Should construct new Node', () => {
    let node: TNode<number> = new Node(5);

    expectChai(node)
      .to.be.instanceOf(Node);
    expectChai(node.value)
      .to.be.equal(5);
    expectChai(node.next)
      .to.be.equal(null);
  });
});

describe(`'Linked List' data structure implementation.`, () => {

  it('Should construct LinkedList', () => {
    let linkedList: TLinkedList<number> = new LinkedList();

    expectChai(linkedList)
      .to.be.instanceOf(LinkedList);
    expectChai(linkedList.size)
      .to.be.equal(0);
    expectChai(linkedList.head)
      .to.be.equal(null);
    expectChai(linkedList.tail)
      .to.be.equal(null);

    expectChai(LinkedList.prototype)
      .to.have.ownProperty('insertFirst');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('insertLast');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('insertAt');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('getFirst');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('getLast');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('getAt');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('removeFirst');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('removeLast');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('removeAt');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('clearList');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('printListValues');
    expectChai(LinkedList.prototype)
      .to.have.ownProperty('reverse');
  });
});
