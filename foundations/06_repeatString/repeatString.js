const repeatString = function(str, numRepeats) {
  let repeated = "";
  if (numRepeats < 0) return "ERROR";

  for (let i = 0; i < numRepeats; i++) {
    repeated += str;
  }

  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
