import isFull from './isFull';
import { expect as expectChai } from 'chai';
import { TBst } from '../bst';
import BstNode from 'binarySearchTree/bstNode/binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
*/

describe(`Is Binary Search Tree balanced`, () => {
  it('Should return false, if BST is empty', () => {
    expectChai(isFull.apply({ root: null } as TBst<number>))
      .to.be.equal(false);
  });

  it('Should return true, if every node has 0 or 2 children.', () => {
    const mockBST: TBst<number> = {
      root: new BstNode(
        15,
        new BstNode(10, null, null),
        new BstNode(20, new BstNode(17), new BstNode(25))
      )
    } as TBst<number>;
    expectChai(isFull.apply(mockBST))
      .to.be.equal(true);
  });

  it('Should return false, if node is not full', () => {
    const mockBST: TBst<number> = {
      root: new BstNode(
        15,
        new BstNode(10, new BstNode(8), new BstNode(12)),
        new BstNode(20, null, new BstNode(25))
      )
    } as TBst<number>;
    expectChai(isFull.apply(mockBST))
      .to.be.equal(false);
  });
});
