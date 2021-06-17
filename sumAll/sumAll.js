const sumAll = ((numA, numB) => {
    if (!Number.isInteger(numA) || !Number.isInteger(numB) || numA < 0 || numB < 0) {
        return "ERROR"; 
    } else {
        let start = 0; 
        let end = 0; 
        if (numA > numB) {
            start = numB; 
            end = numA; 
        } else {
            start = numA; 
            end = numB; 
        }
        let total = 0; 
        for (let i = start; i <= end; i++) {
            total += i; 
        }
        console.log(total); 
        return total; 
    }
});

module.exports = sumAll;
