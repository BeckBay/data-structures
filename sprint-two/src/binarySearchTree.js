var BinarySearchTree = function(value) {
  var tree = Object.create(bstPrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var bstPrototype = {};

//if node is less than value
  //if left is empty
    //go left
  //else ?

//if node is greater than value
  //if right is empty
    //go right
  //else ?

bstPrototype.insert = function (node) {
  var i = this;
  while (i !== undefined) {
    if (node < i.value) {
      if (i.left !== null) {
        i = i.left;
        continue;
      } else {
        i.left = new BinarySearchTree(node);
        return;
      }
    } else {
      if (i.right !== null) {
        i = i.right;
        continue;
      } else {
        i.right = new BinarySearchTree(node);
        return;
      }
    }
  }
  if (node < i.value) {
    i.left = new BinarySearchTree(node);
  } else {
    i.right = new BinarySearchTree(node);
  }

};


bstPrototype.contains = function (node, currentNode) {
  if (!currentNode) {
    var currentNode = this;
  }

  if (currentNode.value === node) {
    return true;
  } else if (currentNode.value > node) {
    // traverse right
    if (!currentNode.left) {
      return false;
    }
    return this.contains(node, currentNode.left);
  } else {
    // traverse left
    if (!currentNode.right) {
      return false;
    }
    return this.contains(node, currentNode.right);
  }

  return false;

  if (node === this.value || node === this.left || node === this.right) {
    return true;
  }
  return false;
};

bstPrototype.depthFirstLog = function (func, node) {
  if (!node) {
    node = this;
  }

  func(node.value);

  if (node.left != null) {
    this.depthFirstLog(func, node.left);
  }
  if (node.right != null) {
    this.depthFirstLog(func, node.right);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
