import getBstMaxNode from './getBstMaxNode';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
*/
describe(`Get node with max value`, () => {
  let mockBstNode: TBstNode<number>;

  beforeAll(() => {
    mockBstNode = {
      value: 15,
      left: {
        value: 10,
        left: {
          value: 8,
          left: null,
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

  it('Should return null, if BST is empty', () => {
    const result: TBstNode<number> = getBstMaxNode.apply(null);
    expectChai(result)
      .to.be.null;
  });

  it('Should return node with value 25', () => {
    const result: TBstNode<Number> = getBstMaxNode.apply(mockBstNode);
    const expected: TBstNode<Number> = mockBstNode.right.right;
    expectChai(result.value)
      .to.be.equal(expected.value);
    expectChai(result.left)
      .to.be.null;
  });

  it('Should return node with value 12', () => {
    const result: TBstNode<Number> = getBstMaxNode.apply(mockBstNode.left);
    const expected: TBstNode<Number> = mockBstNode.left.right;
    expectChai(result.value)
      .to.be.equal(expected.value);
    expectChai(result.left)
      .to.be.null;
  });
});
