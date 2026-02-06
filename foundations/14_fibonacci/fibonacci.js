const fibonacci = function(member) {
  let count;

  if (typeof member !== 'number') {
    count = parseInt(member);
  } else {
    count = member;
  }

  if (count < 0) {
    return "OOPS";
  }
  if (count == 0) {
    return 0;
  }

  let fibo = [1, 1];

  if (count == 1 || count == 2) {
    return 1;
  } else {
    for (let i = 0; i < (member - 2); i++) {
      fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }

    return fibo[fibo.length - 1];
  }


};

// Do not edit below this line
module.exports = fibonacci;
