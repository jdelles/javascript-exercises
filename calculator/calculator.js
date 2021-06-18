const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(numArray) {
  let rtn = 0; 
	if (numArray.length !== 0) {
    for (let i = 0; i < numArray.length; i++) {
      rtn += numArray[i]; 
    }
  }
  return rtn; 
};

const multiply = function(numArray) {
  let rtn = 1; 
  for (let i = 0; i < numArray.length; i++) {
    rtn *= numArray[i]; 
  }
  return rtn; 
};

const power = function(num, exponent) {
	if (exponent === 0) {
    return 1; 
  }
  return num * power(num, exponent - 1); 
};

const factorial = function(num) {
  if (num < 0) {
    return "ERROR"; 
  }
	if (num === 0) {
    return 1; 
  }
  return num * factorial(num - 1); 
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
