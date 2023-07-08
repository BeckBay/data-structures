var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

//// 5     2
//  2  3     4
//     1

treeMethods.height = function(currentNode, height) {
  if (!currentNode) {
    console.log('Original call');
    currentNode = this;
    height = 0;
  }
  console.log('currentNode: ', currentNode);
  var maxHeight = height;
  currentNode.children.forEach((c) => {
    var subHeight = treeMethods.height(c, height + 1);
    if (subHeight > maxHeight) {
      maxHeight = subHeight;
    }
  });

  return maxHeight;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
