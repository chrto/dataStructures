import hasBouthChild from './hasBouthChild';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/*
                     15
                  /     \
                10       20
                   \     /
                   12   17
*/
describe(`Has node bouth childs or not`, () => {
  let mockBSTNode: TBstNode<number>;
  beforeAll(() => {
    mockBSTNode = {
      value: 15,
      left: {
        value: 10,
        left: null,
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: null
      }
    } as TBstNode<number>;
  });

  it('Should return false, if node has not left child', () => {
    expectChai(hasBouthChild.apply(mockBSTNode.left))
      .to.be.false;
  });

  it('Should return false, if node has not right child', () => {
    expectChai(hasBouthChild.apply(mockBSTNode.right))
      .to.be.false;
  });
  it('Should return true, if node has bouth child', () => {
    expectChai(hasBouthChild.apply(mockBSTNode))
      .to.be.true;
  });
});
