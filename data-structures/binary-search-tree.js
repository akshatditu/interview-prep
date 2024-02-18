// each node can have only two children
// every node to the left of a parent node is always less than the parent
// every node to the right of a parent node is always greater than the parent

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node();
    node.value = value;
    if (this.root === null) {
      this.root = node;
      return this;
    }
    const curr = this.root;
    while (true) {
      if (curr.value < value) {
        if (curr.right === null) {
          curr.right = node;
          return;
        } else {
          curr = curr.right;
        }
      } else {
        if (curr.left === null) {
          curr.left = node;
          return;
        } else {
          curr = curr.left;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) {
      return false;
    }
    const curr = this.root;
    while (current) {
      if (curr.value === value) {
        return true;
      } else if (curr.value < value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.root = new Node();
