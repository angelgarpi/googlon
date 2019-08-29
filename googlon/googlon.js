// PROGRAM

const {
  toAscii,
  toGooglon,
  toNumber,
  isPreposition,
  isSubjunctiveVerb,
  isVerb
} = require("./utils");

const googlon = text => {
  let prepositionsNumber = 0,
    regularVerbsNumber = 0,
    subjunctiveVerbsNumber = 0,
    wordsInAscii = new Set(),
    prettyNumbers = 0;

  // We need to split the text into an Array of words,
  // they are coming separated by commas
  const words = text.split(" ");

  // For every word...
  words.forEach(word => {
    // I wrote this conditions to make the program faster
    // functions and regular expressions also check length
    if (word.length >= 6) {
      if (word.length === 6 && isPreposition(word)) {
        // 1
        prepositionsNumber++;
      } else {
        if (isSubjunctiveVerb(word)) {
          // 3
          subjunctiveVerbsNumber++;
        } else if (isVerb(word)) {
          // 2
          regularVerbsNumber++;
        }
      }
    }

    // 4
    const wordInAscii = toAscii(word);

    if (!wordsInAscii.has(wordInAscii)) {
      wordsInAscii.add(wordInAscii);

      // 5
      let number = toNumber(word);

      if (number >= 81827 && number % 3 === 0) {
        prettyNumbers++;
      }
    }
  });

  //4
  const sortedWordsInAscii = [...wordsInAscii];
  sortedWordsInAscii.sort();

  const sortedWords = sortedWordsInAscii.map(word => toGooglon(word));

  return {
    prepositionsNumber,
    regularVerbsNumber,
    subjunctiveVerbsNumber,
    sortedWords,
    prettyNumbers
  };
};

module.exports = googlon;
