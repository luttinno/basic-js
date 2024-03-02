const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedString = "";

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    encodedString += (count > 1 ? count : "") + str[i];
  }

  return encodedString;
}

module.exports = {
  encodeLine,
};
