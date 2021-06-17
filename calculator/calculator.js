const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
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
