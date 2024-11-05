import insert from './insert';
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
describe(`Insert node into Binary Search Tree`, () => {
  it('Should insert root node into empty BST', () => {
    const mockBST: TBst<number> = { root: null } as TBst<number>;
    insert.apply(mockBST, [15]);

    expectChai(mockBST.root.value)
      .to.be.equal(15);
    expectChai(mockBST.root.left)
      .to.be.equal(null);
    expectChai(mockBST.root.right)
      .to.be.equal(null);
  });

  it('Should insert 10 to the left', () => {
    const mockBST: TBst<number> = { root: new BstNode(15) } as TBst<number>;
    insert.apply(mockBST, [10]);

    expectChai(mockBST.root.left.value)
      .to.be.equal(10);
    expectChai(mockBST.root.left.left)
      .to.be.equal(null);
    expectChai(mockBST.root.left.right)
      .to.be.equal(null);
    expectChai(mockBST.root.right)
      .to.be.equal(null);
  });

  it('Should insert 20 to the right', () => {
    const mockBST: TBst<number> = { root: new BstNode(15) } as TBst<number>;
    insert.apply(mockBST, [20]);

    expectChai(mockBST.root.right.value)
      .to.be.equal(20);
    expectChai(mockBST.root.right.left)
      .to.be.equal(null);
    expectChai(mockBST.root.right.right)
      .to.be.equal(null);
  });

  it('Should insert 25 to the right, right', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, null, new BstNode(20)) } as TBst<number>;
    insert.apply(mockBST, [25]);

    expectChai(mockBST.root.right.right.value)
      .to.be.equal(25);
    expectChai(mockBST.root.right.right.left)
      .to.be.equal(null);
    expectChai(mockBST.root.right.right.right)
      .to.be.equal(null);
  });

  it('Should insert 17 to the right, left', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, null, new BstNode(20)) } as TBst<number>;
    insert.apply(mockBST, [17]);

    expectChai(mockBST.root.right.left.value)
      .to.be.equal(17);
    expectChai(mockBST.root.right.left.left)
      .to.be.equal(null);
    expectChai(mockBST.root.right.left.right)
      .to.be.equal(null);
  });

  it('Should insert 12 to the left, right', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, new BstNode(10)) } as TBst<number>;
    insert.apply(mockBST, [12]);

    expectChai(mockBST.root.left.right.value)
      .to.be.equal(12);
    expectChai(mockBST.root.left.right.left)
      .to.be.equal(null);
    expectChai(mockBST.root.left.right.right)
      .to.be.equal(null);
  });

  it('Should insert 8 to the left, left', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, new BstNode(10)) } as TBst<number>;
    insert.apply(mockBST, [8]);

    expectChai(mockBST.root.left.left.value)
      .to.be.equal(8);
    expectChai(mockBST.root.left.left.left)
      .to.be.equal(null);
    expectChai(mockBST.root.left.left.right)
      .to.be.equal(null);
  });

  it('Should not insert 10, if node exists', () => {
    const mockBST: TBst<number> = { root: new BstNode(15, new BstNode(10)) } as TBst<number>;
    insert.apply(mockBST, [10]);

    expectChai(mockBST.root.left.value)
      .to.be.equal(10);
    expectChai(mockBST.root.left.left)
      .to.be.equal(null);
    expectChai(mockBST.root.left.right)
      .to.be.equal(null);
  });
});
