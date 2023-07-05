var Queue = function() {
  this.storage = {};
  this.enq = 0;
  this.deq = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.enq] = value;
  this.enq++;
};

Queue.prototype.dequeue = function() {
  var out = this.storage[this.deq];
  delete this.storage[this.deq];
  this.deq++;
  return out;
};

Queue.prototype.size = function() {
  if (this.deq > this.enq) {
    return 0;
  }
  return this.enq - this.deq;
};