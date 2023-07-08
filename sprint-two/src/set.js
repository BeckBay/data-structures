var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new Map();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.has(item)) {
    this._storage[item] ++;
    return;
  }
  this._storage.set(item, 1);
};

setPrototype.contains = function(item) {
  return this._storage.has(item);
};

setPrototype.remove = function(item) {
  this._storage.delete(item);
};

setPrototype.union = function(set2) {
  var unionSet = new Set();
  this._storage.forEach((key) => {
    if (set2._storage.has(key)) {
      unionSet.add(key);
    }
  });
  return unionSet;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
