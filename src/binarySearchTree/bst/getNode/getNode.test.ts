import getNode from './getNode';
import BstNode, { TBstNode } from 'binarySearchTree/bstNode/binaryTreeNode';
import { expect as expectChai } from 'chai';
import { TBst } from '../bst';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
*/

describe(`Get node from Binary Search Tree`, () => {
  it('Should return null, if BST is empty', () => {
    const mockBST: TBst<number> = {
      root: null
    } as TBst<number>;
    const result: TBstNode<number> = getNode.apply(mockBST, [15]);
    expectChai(result)
      .to.be.equal(null);
  });

  it('Should return exact node', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, new BstNode(10, new BstNode(8), new BstNode(12)), new BstNode(20, new BstNode(17), new BstNode(25))) } as TBst<number>;
    const expectedNode: TBstNode<number> = mockBST.root.left.right;
    const result: TBstNode<number> = getNode.apply(mockBST, [12]);
    expectChai(result.value)
      .to.be.equal(expectedNode.value);
    expectChai(result.left)
      .to.be.equal(expectedNode.left);
    expectChai(result.right)
      .to.be.equal(expectedNode.right);
  });
});
