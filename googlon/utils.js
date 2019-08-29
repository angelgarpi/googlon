// UTILS

/**
 * @constant {string} googlon_alphabet - Characters of Googlon alphabet sorted
 * @constant {string} ascii_alphabet - Characters of Ascii alphabet sorted
 */
const googlon_alphabet = "sxocqnmwpfyheljrdgui";
const ascii_alphabet = "abcdefghijklmnopqrst";

/**
 *
 * @param {string} word This is a word (string) given in Googlon language
 * @return {bool} Returns if word is a preposition
 */
const isPreposition = word => /^[^u]{5}[dxsmpf]$/.test(word);

/**
 *
 * @param {string} word This is a word (string) given in Googlon language
 * @return {boolean} Returns if word is a verb (regular ones)
 */
const isVerb = word => /^\w{5,}[^udxsmpf]$/.test(word);

/**
 *
 * @param {string} word This is a word (string) given in Googlon language
 * @return {boolean} Returns if word is a subjunctive verb
 */
const isSubjunctiveVerb = word => /^[^udxsmpf]\w{4,}[^udxsmpf]$/.test(word);

/**
 *
 * @param {string} word This is a word (string) given in Googlon language
 * @return {string} Returns a Googlon word in ascii representation
 */
const toAscii = word => {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    const pos = googlon_alphabet.indexOf(c);
    str += ascii_alphabet[pos];
  }
  return str;
};

/**
 *
 * @param {string} word This is a word (string) given in ascii
 * @return {string} Returns an ascii word in Googlon representation
 */
const toGooglon = word => {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    const pos = ascii_alphabet.indexOf(c);
    str += googlon_alphabet[pos];
  }
  return str;
};

/**
 *
 * @param {string} word This is a word (string) given in Googlon language
 * @return {number} Returns the numeric representation of the word
 */
const toNumber = word => {
  let number = 0;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    const value = googlon_alphabet.indexOf(c); // POSITION IN ALPHABET IS ALSO VALUE
    number += value * Math.pow(20, i);
  }
  return number;
};

module.exports = {
  isPreposition,
  isSubjunctiveVerb,
  isVerb,
  toAscii,
  toGooglon,
  toNumber
};

/* SLOWER PERFORMANCE IMPLEMENTATIONS
  const toAscii = word =>
    word
     .split("")
     .map(c => ascii_alphabet[googlon_alphabet.indexOf(c)])
     .join("");

  const toAscii = word =>
    word.replace(/./g, c => ascii_alphabet[googlon_alphabet.indexOf(c)]);

  const toGooglon = word =>
    word
     .split("")
     .map(c => googlon_alphabet[ascii_alphabet.indexOf(c)])
     .join("");

  const toGooglon = word =>
    word.replace(/./g, c => googlon_alphabet[ascii_alphabet.indexOf(c)]);
*/
