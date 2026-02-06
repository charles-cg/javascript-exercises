const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let result = 0;

  arr.forEach(num => {
    result += num;
  });

  return result;
};

const multiply = function(arr) {
  let result = 1;

  arr.forEach(num => {
    result *= num;
  })

  return result;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
  let result = 1;
	
  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
