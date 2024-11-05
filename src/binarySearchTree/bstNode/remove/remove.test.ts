import remove from './remove';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
           / \   /  \   / \    /   \
          5   9 11  13 16 18  23   28
*/
describe(`Remove node from Binary Search Tree node`, () => {

  it('Should remove node from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: { value: 12, left: null, right: null },
      right: null
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [12]);
    expectChai(bst.value)
      .to.be.equal(15);
    expectChai(bst.left)
      .to.be.equal(null);
    expectChai(bst.right)
      .to.be.equal(null);
  });

  it('Should remove root node from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: null,
      right: null
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [15]);
    expectChai(bst)
      .to.be.null;
  });

  it('Should remove root node from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: { value: 12, left: null, right: null },
      right: null
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [15]);
    expectChai(bst.value)
      .to.be.equal(12);
    expectChai(bst.left)
      .to.be.equal(null);
    expectChai(bst.right)
      .to.be.equal(null);
  });

  it('Should remove root node from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: null,
      right: { value: 20, left: null, right: null }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [15]);
    expectChai(bst.value)
      .to.be.equal(20);
    expectChai(bst.left)
      .to.be.equal(null);
    expectChai(bst.right)
      .to.be.equal(null);
  });

  it('Should remove root element from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    let bst: TBstNode<number>;
    bst = remove.apply(mockBSTNode, [15]);
    bst = remove.apply(bst, [12]);
    expectChai(bst.value)
      .to.be.equal(10);
    expectChai(bst.left.value)
      .to.be.equal(8);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right)
      .to.be.equal(null);
    expectChai(bst.right.value)
      .to.be.equal(20);
  });

  it('Should remove left leaf from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [8]);

    expectChai(bst.left.value)
      .to.be.equal(10);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right.value)
      .to.be.equal(12);
  });

  it('Should remove right leaf from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [12]);

    expectChai(bst.left.value)
      .to.be.equal(10);
    expectChai(bst.left.right)
      .to.be.equal(null);
    expectChai(bst.left.left.value)
      .to.be.equal(8);
  });

  it('Should remove node with olny right child from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: null,
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: null,
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [10]);
    expectChai(bst.left.value)
      .to.be.equal(12);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right)
      .to.be.equal(null);

    remove.apply(bst, [20]);
    expectChai(bst.right.value)
      .to.be.equal(25);
    expectChai(bst.right.left)
      .to.be.equal(null);
    expectChai(bst.right.right)
      .to.be.equal(null);
  });

  it('Should remove node with olny left child from BST', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
        right: null
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: null
      }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [10]);
    expectChai(bst.left.value)
      .to.be.equal(8);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right)
      .to.be.equal(null);

    remove.apply(bst, [20]);
    expectChai(bst.right.value)
      .to.be.equal(17);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right)
      .to.be.equal(null);
  });

  it('Should remove node with bouth child from BST - basic', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [10]);
    expectChai(bst.left.value)
      .to.be.equal(8);
    expectChai(bst.left.left)
      .to.be.equal(null);
    expectChai(bst.left.right.value)
      .to.be.equal(12);

    remove.apply(bst, [20]);
    expectChai(bst.right.value)
      .to.be.equal(17);
    expectChai(bst.right.left)
      .to.be.equal(null);
    expectChai(bst.right.right.value)
      .to.be.equal(25);
  });

  it('Should remove node with bouth child from BST - extended', () => {

    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: { value: 5, left: null, right: null }, right: { value: 9, left: null, right: null } },
        right: { value: 12, left: { value: 11, left: null, right: null }, right: { value: 13, left: null, right: null } }
      },
      right: {
        value: 20,
        left: { value: 17, left: { value: 16, left: null, right: null }, right: { value: 18, left: null, right: null } },
        right: { value: 25, left: { value: 23, left: null, right: null }, right: { value: 28, left: null, right: null } }
      }
    } as TBstNode<number>;


    const bst = remove.apply(mockBSTNode, [10]);
    expectChai(bst.left.value)
      .to.be.equal(9);
    expectChai(bst.left.left.value)
      .to.be.equal(8);
    expectChai(bst.left.right.value)
      .to.be.equal(12);
    expectChai(bst.left.left.right)
      .to.be.equal(null);
    expectChai(bst.left.left.left.value)
      .to.be.equal(5);

    remove.apply(bst, [20]);
    expectChai(bst.right.value)
      .to.be.equal(18);
    expectChai(bst.right.left.value)
      .to.be.equal(17);
    expectChai(bst.right.left.left.value)
      .to.be.equal(16);
    expectChai(bst.right.left.right)
      .to.be.equal(null);
    expectChai(bst.right.right.value)
      .to.be.equal(25);
  });

  it('Should not remove from BST, if does not exists', () => {
    const mockBSTNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: { value: 8, left: null, right: null },
        right: { value: 12, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const bst = remove.apply(mockBSTNode, [100]);

    expectChai(bst.left.value)
      .to.be.equal(10);
    expectChai(bst.left.left.value)
      .to.be.equal(8);
    expectChai(bst.left.right.value)
      .to.be.equal(12);
    expectChai(bst.right.value)
      .to.be.equal(20);
    expectChai(bst.right.left.value)
      .to.be.equal(17);
    expectChai(bst.right.right.value)
      .to.be.equal(25);
  });
});
