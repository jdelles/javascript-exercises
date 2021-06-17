const reverseString = ((string) => {
    const stringArray = string.split(""); 
    let rtn = ''; 
    for (let i = stringArray.length - 1; i >= 0; i--) {
        rtn += stringArray[i]; 
    }
    return rtn; 
});

module.exports = reverseString;
