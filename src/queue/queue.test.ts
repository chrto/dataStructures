import Queue, { TQueue } from './queue';
import { expect as expectChai } from 'chai';


describe(`'Queue' data structure.`, () => {

  it('Should enqueue and dequeue values', () => {
    let queue: TQueue<number> = new Queue();
    let value: number;
    value = queue.dequeue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    value = queue.dequeue();
    value = queue.dequeue();
    value = queue.dequeue();
    value = queue.dequeue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    value = queue.dequeue();

    expectChai(value)
      .to.be.equal(1);
    expectChai(queue.size)
      .to.be.equal(2);
    expectChai(queue.head)
      .to.be.deep.equal({ value: 2, next: { value: 3, next: null } });
    expectChai(queue.tail)
      .to.be.deep.equal({ value: 3, next: null });
  });
});

describe(`'Queue' data structure implementation.`, () => {

  it('Should construct Queue', () => {
    let queue: TQueue<number> = new Queue();

    expectChai(queue)
      .to.be.instanceOf(Queue);
    expectChai(queue.size)
      .to.be.equal(0);
    expectChai(queue.head)
      .to.be.equal(null);
    expectChai(queue.tail)
      .to.be.equal(null);

    expectChai(Queue.prototype)
      .to.have.ownProperty('enqueue');
    expectChai(Queue.prototype)
      .to.have.ownProperty('dequeue');
  });
});
