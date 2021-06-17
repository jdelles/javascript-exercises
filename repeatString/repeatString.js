const repeatString = ((string, repeat) => {
    if (repeat < 0) {
        return("ERROR"); 
    }
    let rtn = ''; 
    for(let i = 0; i < repeat; i++) {
        rtn += string;  
    }
    return rtn; 
});

module.exports = repeatString;
