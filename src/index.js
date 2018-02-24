class Sorter {
  constructor() {
    this.items = [];
    this.compareFunction = null;
  }

  add(element) {
      this.items.push(element);
  }

  at(index) {
    return this.items[index];
  }

  get length() {
    return this.items.length;
  }

  toArray() {
      return this.items;
  }

  sort(indices) {
    let items = [];
    for(let index of indices) {
        items.push(this.items[index]);
    }
    this.items = items.sort(this.compareFunction);
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;