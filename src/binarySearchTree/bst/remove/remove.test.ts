import remove from './remove';
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
describe(`Remove node from Binary Search Tree`, () => {
  it('Should not remove from empty BST', () => {
    const mockBST: TBst<number> = { root: null } as TBst<number>;
    remove.apply(mockBST, [15]);

    expectChai(mockBST.root)
      .to.be.null;
  });

  it('Should remove root from BST', () => {
    const mockBST: TBst<number> = { root: new BstNode(15) } as TBst<number>;
    remove.apply(mockBST, [15]);

    expectChai(mockBST.root)
      .to.be.null;
  });

  it('Should not remove root from BST', () => {
    const mockBST: TBst<number> = { root: new BstNode(15) } as TBst<number>;
    remove.apply(mockBST, [10]);
    expectChai(mockBST.root.value)
      .to.be.equal(15);
  });


  it('Should remove 20 from ', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, new BstNode(10, new BstNode(8), new BstNode(12)), new BstNode(20, new BstNode(17), new BstNode(25))) } as TBst<number>;
    remove.apply(mockBST, [20]);

    expectChai(mockBST.root.right.value)
      .to.be.equal(17);
    expectChai(mockBST.root.left.value)
      .to.be.equal(10);

    expectChai(mockBST.root.right.right.value)
      .to.be.equal(25);
    expectChai(mockBST.root.right.left)
      .to.be.equal(null);
  });
});
