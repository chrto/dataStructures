import hasLeftChild from './hasLeftChild';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /
             8    12   17
*/
describe(`Has node left child or not`, () => {
  let mockBSTNode: TBstNode<number>;
  beforeAll(() => {
    mockBSTNode = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
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
    expectChai(hasLeftChild.apply(mockBSTNode.left.left))
      .to.be.false;
  });

  it('Should return true, if node has left child', () => {
    expectChai(hasLeftChild.apply(mockBSTNode.left))
      .to.be.true;
  });
  it('Should return true, if node has left child', () => {
    expectChai(hasLeftChild.apply(mockBSTNode.right))
      .to.be.true;
  });
});
