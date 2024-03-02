const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    const encryptedChars = [];
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const encryptedCharCode =
          ((charCode - 65 + (key.charCodeAt(j % key.length) - 65)) % 26) + 65;
        encryptedChars.push(String.fromCharCode(encryptedCharCode));
        j++;
      } else {
        encryptedChars.push(message[i]);
      }
    }

    return this.direct
      ? encryptedChars.join("")
      : encryptedChars.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    const decryptedChars = [];
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const decryptedCharCode =
          ((charCode - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26) +
          65;
        decryptedChars.push(String.fromCharCode(decryptedCharCode));
        j++;
      } else {
        decryptedChars.push(encryptedMessage[i]);
      }
    }

    return this.direct
      ? decryptedChars.join("")
      : decryptedChars.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
