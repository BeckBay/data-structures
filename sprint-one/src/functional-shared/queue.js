var Queue = function() {
  var queue = {};
  _.extend(queue, queueMethods);
  queue.storage = {};
  queue.enq = 0;
  queue.deq = 0;
  return queue;
};


var queueMethods = {
  enqueue: function(value) {
    this.storage[this.enq] = value;
    this.enq++;
  },

  dequeue: function() {
    var out = this.storage[this.deq];
    delete this.storage[this.deq];
    this.deq++;
    return out;
  },
  size: function() {
    if (this.deq > this.enq) {
      return 0;
    }
    return this.enq - this.deq;
  }
};