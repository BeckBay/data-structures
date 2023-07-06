

// Instantiate a new graph
var Graph = function() {
  this.nodes = {}; // [1, 2, 3]
  //this.edges = []; // [ [1,2], [1, 3] ]
  //{1:[2, 3], 2: [1], 3:[1]}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //{1:[2, 3], 2: [1, 3], 3:[1, 2]}

  this.nodes[node].forEach((e) => {
    this.removeEdge(node, e);
  });

  delete this.nodes[node];
  this.nodes[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode].splice(this.nodes[fromNode].indexOf(toNode), 1);
  this.nodes[toNode].splice(this.nodes[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


