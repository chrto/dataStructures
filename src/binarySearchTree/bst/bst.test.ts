import { expect as expectChai } from 'chai';
import Bst, { TBst } from './bst';


describe(`'Linked List' data structure implementation.`, () => {

  it('Should construct Binary Search Tree', () => {
    let bst: TBst<number> = new Bst();

    expectChai(bst)
      .to.be.instanceOf(Bst);
    expectChai(bst.root)
      .to.be.equal(null);

    expectChai(Bst.prototype)
      .to.have.ownProperty('insert');
    expectChai(Bst.prototype)
      .to.have.ownProperty('remove');
    expectChai(Bst.prototype)
      .to.have.ownProperty('getNode');
    expectChai(Bst.prototype)
      .to.have.ownProperty('hasNode');
    expectChai(Bst.prototype)
      .to.have.ownProperty('isBalanced');
    expectChai(Bst.prototype)
      .to.have.ownProperty('isFull');
  });
});
