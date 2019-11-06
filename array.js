const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Array is already empty');
    }
    const val = memory.get(this.ptr + this.length - 1);

    // this isn't needed?
    // memory.free(this.ptr + this.length - 1);

    this.length--;
    return val;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);

    this.length--;
  }

  // revisit
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
}

function main() {

  Array.SIZE_RATIO = 3;

  let arr = new Array();
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();

  // console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');

  console.log(arr.get(0))
}

main();