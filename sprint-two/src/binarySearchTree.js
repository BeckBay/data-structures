var BinarySearchTree = function(value) {
  var tree = Object.create(bstPrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
};

var bstPrototype = {};

BinarySearchTree.prototype.insert = function (node) {
  var i = this.tree;
  while (i.left !== undefined || i.right !== undefined) {
    if (node < i.value) {
      if (i.left !== undefined) {
        i = i.left;
        continue;
      } else {
        i.left = new BinarySearchTree(node);
        return;
      }
    } else {
      if (i.right !== undefined) {
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

//      5      4
//     /     /  \
//    4     2    5
//   /
//  2
//
BinarySearchTree.prototype.contains = function (node) {

};

BinarySearchTree.prototype.depthFirstLog = function (node) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
