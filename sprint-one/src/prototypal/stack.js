var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.counter = 0;
  return stack;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter === 0) {
    return;
  }
  this.counter--;
  var result = this.storage[this.counter];
  delete this.storage[this.counter];
  return result;
};

stackMethods.size = function() {
  return this.counter;
};

