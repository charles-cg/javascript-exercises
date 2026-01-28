const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * (5 / 9);

  let roundCelsius = Math.round(celsius * 10) / 10;

  return roundCelsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * (9 / 5) + 32);

  let roundFahrenheit = Math.round(fahrenheit * 10) / 10;

  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
