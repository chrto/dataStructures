import isPerfect from './isPerfect';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/* Perfect BST
                     15
                  /      \
                10        20
              /   \      /  \
             8     12   17    25
            / \   / \   / \   / \
           2   9 11 13 16 18 23 28
*/
describe(`Is node perfect`, () => {
  let mockPerfectBstNode: TBstNode<number>;
  let mockBstNode: TBstNode<number>;

  beforeAll(() => {
    mockPerfectBstNode = {
      value: 15,
      left: {
        value: 10,
        left: {
          value: 8,
          left: { value: 2, left: null, right: null },
          right: { value: 9, left: null, right: null }
        },
        right: {
          value: 12,
          left: { value: 11, left: null, right: null },
          right: { value: 13, left: null, right: null }
        }
      },
      right: {
        value: 20,
        left: {
          value: 17,
          left: { value: 16, left: null, right: null },
          right: { value: 18, left: null, right: null }
        },
        right: {
          value: 25,
          left: { value: 23, left: null, right: null },
          right: { value: 28, left: null, right: null }
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
          left: {
            value: 16,
            left: null,
            right: null
          },
          right: {
            value: 18,
            left: null,
            right: null
          }
        },
        right: {
          value: 25,
          left: {
            value: 23,
            left: null,
            right: null
          },
          right: {
            value: 28,
            left: null,
            right: null
          }
        }
      }
    } as TBstNode<number>;
  });

  it('Should return false, if BST node is empty', () => {
    const result: TBstNode<number> = isPerfect.apply(null);
    expectChai(result)
      .to.be.equal(false);
  });

  it('Should return true, if BST node has no child', () => {
    const result: TBstNode<number> = isPerfect.apply(mockPerfectBstNode.left.left.left);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return true, if BST node is perfect', () => {
    const result: TBstNode<number> = isPerfect.apply(mockPerfectBstNode);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return false, if BST node is not perfect', () => {
    const result: TBstNode<number> = isPerfect.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(false);
  });
});
