import isBalanced from './isBalanced_traversal';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/* Balanced BST
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
            /
           2
*/
describe(`Is node balanced`, () => {
  let mockBalancedBstNode: TBstNode<number>;
  let mockBstNode: TBstNode<number>;

  beforeAll(() => {
    mockBalancedBstNode = {
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

    mockBstNode = {
      value: 15,
      left: {
        value: 10,
        left: {
          value: 8,
          left: {
            value: 2,
            left: {
              value: 1,
              left: null,
              right: null
            },
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

  it('Should return true, if BST node is empty', () => {
    const result: TBstNode<number> = isBalanced.apply(null);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return true, if BST node has no child', () => {
    const result: TBstNode<number> = isBalanced.apply(mockBalancedBstNode.left.left.left);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return true, if BST node is balanced', () => {
    const result: TBstNode<number> = isBalanced.apply(mockBalancedBstNode);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return false, if BST node is not balanced', () => {
    const result: TBstNode<number> = isBalanced.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(false);
  });
});
