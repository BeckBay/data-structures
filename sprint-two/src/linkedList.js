var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }
    var newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
  };

  list.removeHead = function() {
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var i = this.head;
    while (i) {
      if (i.value === target) {
        return true;
      }
      i = i.next;
    }
    return false;
  };

  list.removeTail = function() {
    var i = this.head;
    while (i) {
      if (!i.next.next) {
        i.next = null;
        this.tail = i;
      }
      i = i.next;
    }
    return list;
  };

  list.each = function(func) {
    var i = this.head;
    while (i) {
      func(i.value);
      i = i.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
