import getNode from './getNode';
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

describe(`Insert node into Binary Search Tree`, () => {
  let mockBSTNode: TBstNode<number>;

  beforeAll(() => {
    mockBSTNode = {
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
  });

  it('Should return null, if no node', () => {
    const result: TBstNode<number> = getNode.apply(null, [15]);
    expectChai(result)
      .to.be.equal(null);
  });

  it('Should return exact node', () => {
    const expectedNode: TBstNode<number> = mockBSTNode;
    const result: TBstNode<number> = getNode.apply(mockBSTNode, [15]);
    expectChai(result.value)
      .to.be.equal(expectedNode.value);
    expectChai(result.left.value)
      .to.be.equal(expectedNode.left.value);
    expectChai(result.right.value)
      .to.be.equal(expectedNode.right.value);
  });

  it('Should return exact node', () => {
    const expectedNode: TBstNode<number> = mockBSTNode.right.left;
    const result: TBstNode<number> = getNode.apply(mockBSTNode, [17]);
    expectChai(result.value)
      .to.be.equal(expectedNode.value);
    expectChai(result.left)
      .to.be.equal(expectedNode.left);
    expectChai(result.right)
      .to.be.equal(expectedNode.right);
  });

  it('Should return exact node', () => {
    const expectedNode: TBstNode<number> = mockBSTNode.left.left;
    const result: TBstNode<number> = getNode.apply(mockBSTNode, [8]);
    expectChai(result.value)
      .to.be.equal(expectedNode.value);
    expectChai(result.left)
      .to.be.equal(expectedNode.left);
    expectChai(result.right)
      .to.be.equal(expectedNode.right);
  });

  it('Should return exact node', () => {
    const expectedNode: TBstNode<number> = mockBSTNode.left.left.left;
    const result: TBstNode<number> = getNode.apply(mockBSTNode, [5]);
    expectChai(result.value)
      .to.be.equal(expectedNode.value);
    expectChai(result.left)
      .to.be.equal(expectedNode.left);
    expectChai(result.right)
      .to.be.equal(expectedNode.right);
  });

  it('Should return null, if node does not exists', () => {
    const result: TBstNode<number> = getNode.apply(mockBSTNode, [100]);
    expectChai(result)
      .to.be.equal(null);
  });
});
