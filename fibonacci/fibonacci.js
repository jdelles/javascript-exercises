const fibonacci = function(num) {
    num = Number.parseInt(num); 
    if (num < 0) {
        return "OOPS"; 
    }
    let result = 0; 
    if (num === 1 || num === 2) {
        result = 1; 
    }
    let first = 1; 
    let second = 1;
    for (let i = num - 2; i > 0; i--) {
        result = first + second; 
        first = second; 
        second = result; 
    }
    return result; 
};

module.exports = fibonacci;
