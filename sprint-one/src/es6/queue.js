class Queue {
  constructor() {
    this.storage = {};
    this.enq = 0;
    this.deq = 0;
  }

  enqueue(value) {
    this.storage[this.enq] = value;
    this.enq++;
  }

  dequeue() {
    const out = this.storage[this.deq];
    delete this.storage[this.deq];
    this.deq++;
    return out;
  }

  size() {
    if (this.deq > this.enq) {
      return 0;
    }
    return this.enq - this.deq;
  }
}
