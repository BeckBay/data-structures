

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    this._storage.set(index, [k, v]);
  } else {
    var getIndex = this._storage.get(index);
    if (k === getIndex[0]) {
      this._storage.set(index, [k, v]);
      return;
    }

    if (Array.isArray(getIndex[0])) {
      getIndex.push([k, v]);
      this._storage.set(index, getIndex);
      // already has collisions value
      // 1: [v1, 'val1']
      //1: [[v1, 'val1'], [v2, 'val2']]
    console.log('pusher')
    } else { //new collision
      var collisionList = [];
      collisionList.push(getIndex, [k, v]);
      this._storage.set(index, collisionList);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(index)) {
    return;
  } else {
    var getIndex = this._storage.get(index);

    if (Array.isArray(getIndex[0])) {
      var result;
      getIndex.forEach((keyValuePair) => {
        console.log(keyValuePair, k);
        if (keyValuePair[0] === k) {
          console.log('keyvp', keyValuePair)
          result = keyValuePair[1];
        }
      });
      return result;
    } else {
      return getIndex[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


