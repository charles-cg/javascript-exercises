const palindromes = function (word) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  let cleanWord = word
  .toLowerCase()
  .split('')
  .filter(character => characters.includes(character))
  .join('')

  for (let i = 0; i < cleanWord.length; i++) {
    if (cleanWord[i] !== cleanWord[cleanWord.length - 1 - i]) {
      return false;
    }
  }

  return true;

};

// Do not edit below this line
module.exports = palindromes;
