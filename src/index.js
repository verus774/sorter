class Sorter {
  constructor() {
    this.items = [];
    this.compareFunction = (a, b) => a - b;
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

    items = items.sort(this.compareFunction);
    indices.sort().forEach((item, i) => this.items[item] = items[i]);
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
