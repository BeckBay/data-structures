

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var geta = this._storage.get(index) || [];
  // for (var i = 0; i < geta.length; i++) {
  //   if (geta[i][0] === k) {
  //     geta[i][1] = v;
  //     return;
  //   }
  // }
  // geta.push([k, v]);
  // this._storage.set(index, geta);

  // if (this._storage.get(index)) {
  //   if (Array.isArray(this._storage.get(index))) {
  //     this._storage.get(index).push(v);
  //   } else {
  //     this._storage.set(index, new LimitedArray());
  //     this._storage.set(index, [this._storage.get(index), v]);
  //   }
  // } else {
  this._storage.set(index, v);
  // }


  // this._storage.each((val, k) => {
  //   console.log(k, ':', val);
  // });
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(index))) {
    this._storage.get(index).each((e) => {
      if (e === k) {
        return e;
      }
    });
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


