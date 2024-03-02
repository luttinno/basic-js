const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value !== undefined ? value : " ");
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map((item) => `( ${item} )`).join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
