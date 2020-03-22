const chainMaker = {
  items: [],
  
  getLength() {
    return this.items.length;
  },
  addLink(value) {
    value = value === undefined ? null : value;
    this.items.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this.items.length <= position || position <= 0 || isNaN(Number(position)) || !Number.isInteger(position)) {
      this.items = [];
      throw new Error();
    } 
    this.items = this.items.filter(x => x !== this.items[position - 1]);
    return this;
  },
  reverseChain() {
    this.items.reverse();
    return this;
  },
  finishChain() {
    let result = this.items.join('~~');
    this.items = [];
    return result;
  }
};

module.exports = chainMaker;
