

var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};


Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

Graph.prototype.removeNode = function(node) {
  this.nodes[node].forEach((e) => {
    this.removeEdge(node, e);
  });

  delete this.nodes[node];
  this.nodes[node] = undefined;
};


Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};


Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].splice(this.nodes[fromNode].indexOf(toNode), 1);
  this.nodes[toNode].splice(this.nodes[toNode].indexOf(fromNode), 1);
};


Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

addnode: o(1) constant
contains: o(1) constant
removeNode: o(n) linear
hasEdge: o(n) linear
addEdge: o(1) constant
removeEdge: o(n) linear
forEachNode: o(n) linear
 */


