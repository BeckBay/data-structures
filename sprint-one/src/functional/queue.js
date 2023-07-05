var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enq = 0;
  var deq = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enq] = value;
    enq++;
  };

  someInstance.dequeue = function() {
    var out = storage[deq];
    delete storage[deq];
    deq++;
    return out;
  };

  someInstance.size = function() {
    if (deq > enq) {
      return 0;
    }
    return enq - deq;
  };

  return someInstance;
};
