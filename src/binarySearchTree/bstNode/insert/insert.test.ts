import insert from './insert';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
*/
describe(`Insert new node into Binary Search Tree node`, () => {

  it('Should insert 10 to the left', () => {
    const mockBSTNode: TBstNode<number> = null as TBstNode<number>;

    const bst = insert.apply(mockBSTNode, [10]);

    expectChai(bst.value)
      .to.be.equal(10);
    expectChai(bst.left)
      .to.be.equal(null);
    expectChai(bst.right)
      .to.be.equal(null);
  });

  it('Should insert 10 to the left', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: null, right: null } as TBstNode<number>;
    const bst = insert.apply(mockBSTNode, [10]);

    expectChai(bst.left.value)
      .to.be.equal(10);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right)
      .to.be.equal(null);
    expectChai(bst.right)
      .to.be.equal(null);
  });

  it('Should insert 20 to the right', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: null, right: null } as TBstNode<number>;
    const bst = insert.apply(mockBSTNode, [20]);

    expectChai(bst.right.value)
      .to.be.equal(20);
    expectChai(bst.right.left)
      .to.be.equal(null);
    expectChai(bst.right.right)
      .to.be.equal(null);
  });

  it('Should insert 25 to the right, right', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: null, right: { value: 20, left: null, right: null } } as TBstNode<number>;

    const bst = insert.apply(mockBSTNode, [25]);

    expectChai(bst.right.right.value)
      .to.be.equal(25);
    expectChai(bst.right.right.left)
      .to.be.equal(null);
    expectChai(bst.right.right.right)
      .to.be.equal(null);
  });

  it('Should insert 17 to the right, left', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: null, right: { value: 20, left: null, right: null } } as TBstNode<number>;
    const bst = insert.apply(mockBSTNode, [17]);

    expectChai(bst.right.left.value)
      .to.be.equal(17);
    expectChai(bst.right.left.left)
      .to.be.equal(null);
    expectChai(bst.right.left.right)
      .to.be.equal(null);
  });

  it('Should insert 12 to the left, right', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: { value: 10, left: null, right: null }, right: null } as TBstNode<number>;
    const bst = insert.apply(mockBSTNode, [12]);

    expectChai(bst.left.right.value)
      .to.be.equal(12);
    expectChai(bst.left.right.left)
      .to.be.equal(null);
    expectChai(bst.left.right.right)
      .to.be.equal(null);
  });

  it('Should insert 8 to the left, left', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: { value: 10, left: null, right: null }, right: null } as TBstNode<number>;
    const bst = insert.apply(mockBSTNode, [8]);

    expectChai(bst.left.left.value)
      .to.be.equal(8);
    expectChai(bst.left.left.left)
      .to.be.equal(null);
    expectChai(bst.left.left.right)
      .to.be.equal(null);
  });

  it('Should not insert 10, if node exists', () => {
    const mockBSTNode: TBstNode<number> = { value: 15, left: { value: 10, left: null, right: null }, right: null } as TBstNode<number>;
    const bst = insert.apply(mockBSTNode, [10]);

    expectChai(bst.left.value)
      .to.be.equal(10);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.left)
      .to.be.equal(null);
  });
});
