const removeFromArray = ((array, toRemove) => {
    array = array.filter((element) => {
        return element !== toRemove; 
    }); 
    return array; 
});

module.exports = removeFromArray;
