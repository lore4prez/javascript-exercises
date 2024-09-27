const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let len = arr.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let len = arr.length;
  let res = 1;
  for (let i = 0; i < len; i++) {
    res *= arr[i];
  }
  return res;
};

const power = function(num1, num2) {
  let res = 1;
  if (num2 == 0) return res;
  if (num2 > 0) {
    for (let i = 0; i < num2; i++) {
      res *= num1;
    }
    return res;
  }
  else {
    for (let i = 0; i < (-1)*num2; i++) {
      res *= num1;
    }
    return (1.00/res);
  }
};

const factorial = function(num) {
  let res = 1;
  for (let i = num-1; i > 0; i--) {
    res += res * i;
  }
  return res;
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
