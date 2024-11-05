
import isComplete from './isComplete';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/* Perfect BST
                     15
                  /      \
                10        20
              /   \      /  \
             8     12   17    25
            / \   /
           2   9 11
*/
describe(`Is node complete`, () => {


  it('Should return true, if BST node has no child', () => {
    const result: TBstNode<number> = isComplete.apply({ value: 15, left: null, right: null } as TBstNode<number>);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return true, if BST node is complete', () => {
    const mockCompleteBstNode: TBstNode<number> = {
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
          right: null
        }
      },
      right: {
        value: 20,
        left: {
          value: 17, left: null, right: null
        },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;
    const result: TBstNode<number> = isComplete.apply(mockCompleteBstNode);
    expectChai(result)
      .to.be.equal(true);
  });

  it('Should return false, if BST node is not complet', () => {
    const mockBstNode: TBstNode<number> = {
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
          left: null,
          right: { value: 13, left: null, right: null }
        }
      },
      right: {
        value: 20,
        left: {
          value: 17, left: null, right: null
        },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const result: TBstNode<number> = isComplete.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(false);
  });

  it('Should return false, if BST node is not complet - right is higher then left', () => {
    const mockBstNode: TBstNode<number> = {
      value: 15,
      left: {
        value: 10,
        left: null,
        right: null
      },
      right: {
        value: 20,
        left: { value: 17, left: null, right: null },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const result: TBstNode<number> = isComplete.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(false);
  });

  it('Should return false, if BST node is not complet', () => {
    const mockBstNode: TBstNode<number> = {
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
          right: null
        }
      },
      right: {
        value: 20,
        left: {
          value: 17,
          left: { value: 16, left: null, right: null },
          right: null
        },
        right: { value: 25, left: null, right: null }
      }
    } as TBstNode<number>;

    const result: TBstNode<number> = isComplete.apply(mockBstNode);
    expectChai(result)
      .to.be.equal(false);
  });
});
