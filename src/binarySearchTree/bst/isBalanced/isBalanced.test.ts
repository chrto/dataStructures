import isBalanced from './isBalanced';
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
  it('Should return true, if BST is empty', () => {
    expectChai(isBalanced.apply({ root: null } as TBst<number>))
      .to.be.equal(true);
  });

  it('Should return true, if difference between heights of left subtree and the right subtree is not more than 1 and left and right tree are balanced as well.', () => {
    const mockBST: TBst<number> = {
      root: new BstNode(
        15,
        new BstNode(10, new BstNode(8), new BstNode(12)),
        new BstNode(20, new BstNode(17), new BstNode(25))
      )
    } as TBst<number>;
    expectChai(isBalanced.apply(mockBST))
      .to.be.equal(true);
  });

  it('Should return false, if node is not balanced', () => {
    const mockBST: TBst<number> = {
      root: new BstNode(
        15,
        new BstNode(10, new BstNode(8), new BstNode(12)),
        null
      )
    } as TBst<number>;
    expectChai(isBalanced.apply(mockBST))
      .to.be.equal(false);
  });
});
