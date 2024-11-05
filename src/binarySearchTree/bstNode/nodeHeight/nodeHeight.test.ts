import nodeHeight from './nodeHeight';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
            /
           2
*/
describe(`Get node height`, () => {
  let mockBstNode: TBstNode<number>;

  beforeAll(() => {
    mockBstNode = {
      value: 15,
      left: {
        value: 10,
        left: {
          value: 8,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: null
        },
        right: {
          value: 12,
          left: null,
          right: null
        }
      },
      right: {
        value: 20,
        left: {
          value: 17,
          left: null,
          right: null
        },
        right: {
          value: 25,
          left: null,
          right: null
        }
      }
    } as TBstNode<number>;
  });

  it('Should return -1, if BST node is empty', () => {
    const result: TBstNode<number> = nodeHeight.apply(null);
    expectChai(result)
      .to.be.equal(-1);
  });

  it('Should return 0, if BST node has no child', () => {
    const result: TBstNode<number> = nodeHeight.apply(mockBstNode.left.left.left);
    expectChai(result)
      .to.be.equal(0);
  });

  it('Should return 3', () => {
    const result: TBstNode<number> = nodeHeight.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(3);
  });

  it('Should return 2', () => {
    const result: TBstNode<number> = nodeHeight.apply(mockBstNode.left);
    expectChai(result)
      .to.be.equal(2);
  });

  it('Should return 1', () => {
    const result: TBstNode<number> = nodeHeight.apply(mockBstNode.right);
    expectChai(result)
      .to.be.equal(1);
  });
});
