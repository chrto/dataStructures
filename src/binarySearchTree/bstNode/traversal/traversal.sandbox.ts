/*
                     15
                  /     \
                10       20
              /   \     /  \
             8    12   17   25
*/
// import traversal from './inorder/inorderTraversal';
// import traversal from './preorder/preorderTraversal';
import traversal from './postorder/postorderTraversal';
import BstNode, { TBstNode } from '../binaryTreeNode';

const bstNode: TBstNode<number> = new BstNode(
  15,
  new BstNode(
    10,
    new BstNode(8),
    new BstNode(12)
  ),
  new BstNode(
    20,
    new BstNode(17),
    new BstNode(25)
  )
);

const fnPrint = (_: void, node: TBstNode<number>): void => {
  console.log(node.value);
};
traversal.apply(bstNode, [fnPrint, null]);

console.log('---');
const fnToArray = (acc: number[], node: TBstNode<number>): number[] => [...acc, node.value];
traversal
  .apply(bstNode, [fnToArray, []])
  .forEach((v: number) => {
    console.log(v);
  });

console.log('---');
const toString = (acc: string, node: TBstNode<number>): string => `${acc} + ${node.value}`;
console.log(traversal.apply(bstNode, [toString, '0']));

const fnSum = (acc: number, node: TBstNode<number>): number => acc + node.value;
console.log(traversal.apply(bstNode, [fnSum, 0]));

