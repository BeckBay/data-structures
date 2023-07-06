var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new Map();
  set._storage.set(5, 1);
  set._storage[5] += 1;
  // Map
  // 5: 2
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
