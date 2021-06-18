const palindromes = function (word) {
    word = word.replace(/\W/g, "").toLowerCase(); 
    const reverse = word.split("").reverse().join(""); 
    return word === reverse; 
}

module.exports = palindromes;
