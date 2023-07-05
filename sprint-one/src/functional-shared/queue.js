var Queue = function() {
  var storage = {};
  var enq = 0;
  var deq = 0;

  queueMethods.enqueue = function(value) {
    storage[enq] = value;
    enq++;
  };

  queueMethods.dequeue = function() {
    var out = storage[deq];
    delete storage[deq];
    deq++;
    return out;
  };

  queueMethods.size = function() {
    if (deq > enq) {
      return 0;
    }
    return enq - deq;
  };

  return queueMethods;
};


var queueMethods = {};


