import preorderTraversal from './preorderTraversal';
import { expect as expectChai } from 'chai';
import { TBstNode } from '../../binaryTreeNode';

/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
*/
describe(`Preorder traversal of BST`, () => {
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

  describe(`To array..`, () => {
    let toArray: (acc: number[], node: TBstNode<number>) => number[];

    beforeAll(() => {
      toArray = (acc, node) => [...acc, node.value];
    });

    it('Should return empty array, if BST is empty', () => {
      const result: number[] = preorderTraversal.apply(null, [toArray, []]);
      expectChai(result)
        .to.be.an([].constructor.name);
      expectChai(result)
        .to.be.empty;
    });

    it('Should return exact array, if BST is not empty', () => {
      const result: number[] = preorderTraversal.apply(mockBstNode, [toArray, []]);
      const expected: number[] = [15, 10, 8, 12, 20, 17, 25];
      expectChai(result)
        .to.be.an([].constructor.name);
      expectChai(result)
        .to.be.deep.equal(expected);
    });
  });

  describe(`Sum..`, () => {
    let sum: (acc: number, node: TBstNode<number>) => number;

    beforeAll(() => {
      sum = (acc, node) => acc + node.value;
    });

    it('Should return 0, if BST is empty', () => {
      const result: number = preorderTraversal.apply(null, [sum, 0]);
      expectChai(result)
        .to.be.equal(0);
    });

    it('Should return bst node sum', () => {
      const result: number = preorderTraversal.apply(mockBstNode, [sum, 0]);
      expectChai(result)
        .to.be.equal(107);
    });
  });
});
