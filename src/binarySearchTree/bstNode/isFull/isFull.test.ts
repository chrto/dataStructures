import isFull from './isFull_recursion';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/* Full BST
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
            / \
           2   9
*/
describe(`Is node balanced`, () => {
  let mockFullBstNode: TBstNode<number>;
  let mockBstNode: TBstNode<number>;

  beforeAll(() => {
    mockFullBstNode = {
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
          right: {
            value: 9,
            left: null,
            right: null
          }
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

    mockBstNode = {
      value: 15,
      left: {
        value: 10,
        left: {
          value: 8,
          left: null,
          right: {
            value: 9,
            left: null,
            right: null
          }
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

  it('Should return true, if BST node is empty', () => {
    const result: TBstNode<number> = isFull.apply(null);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return true, if BST node has no child', () => {
    const result: TBstNode<number> = isFull.apply(mockFullBstNode.left.left.left);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return true, if BST node is full', () => {
    const result: TBstNode<number> = isFull.apply(mockFullBstNode);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return false, if BST node is not full', () => {
    const result: TBstNode<number> = isFull.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(false);
  });
});
