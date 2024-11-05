import hasNode from './hasNode';
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

describe(`Is node in Binary Search Tree`, () => {
  let mockBST: TBst<number>;

  beforeAll(() => {
    mockBST = {
      root: new BstNode(
        15,
        new BstNode(10, new BstNode(8), new BstNode(12)),
        new BstNode(20, new BstNode(17), new BstNode(25))
      )
    } as TBst<number>;
  });

  it('Should return false, if BST is empty', () => {
    expectChai(hasNode.apply({ root: null } as TBst<number>, [15]))
      .to.be.equal(false);
  });

  it('Should return true, if node exists in tree', () => {
    expectChai(hasNode.apply(mockBST, [12]))
      .to.be.equal(true);
  });

  it('Should return false, if node does not exists in tree', () => {
    expectChai(hasNode.apply(mockBST, [45]))
      .to.be.equal(false);
  });
});
