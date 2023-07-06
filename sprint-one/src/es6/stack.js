class Stack {
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  pop() {
    if (this.counter === 0) {
      return;
    }
    this.counter--;
    const result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  }

  size() {
    return this.counter;
  }
}
