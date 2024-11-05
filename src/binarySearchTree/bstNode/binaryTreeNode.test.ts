import BstNode, { TBstNode } from './binaryTreeNode';
import { expect as expectChai } from 'chai';

describe(`Binary Tree data structure implementation.`, () => {

  it('Should construct new Binary Tree Node', () => {
    let node: TBstNode<number> = new BstNode(5);

    expectChai(node)
      .to.be.instanceOf(BstNode);
    expectChai(node.value)
      .to.be.equal(5);
    expectChai(node.left)
      .to.be.equal(null);
    expectChai(node.right)
      .to.be.equal(null);

    expectChai(BstNode.prototype)
      .to.have.ownProperty('insert');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('remove');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('getNode');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('isLeaf');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('hasLeftChild');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('hasRightChild');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('hasBouthChild');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('getBstMinNode');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('getBstMaxNode');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('nodeHeight');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('isBalanced');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('isFull');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('isPerfect');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('isComplete');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('inorderTraversal');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('preorderTraversal');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('postorderTraversal');
    expectChai(BstNode.prototype)
      .to.have.ownProperty('levelTraversal');
  });
});
