const findTheOldest = function(people) {
    let oldestIndex = 0; 
    let oldestAge = 0; 
    let death; 
    let birth; 
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath !== undefined) {
            death = people[i].yearOfDeath
        } else {
            let day = new Date(); 
            let year = day.getFullYear(); 
            death = year; 
        }
        if (death - people[i].yearOfBirth > oldestAge) {
            oldestAge = death - people[i].yearOfBirth; 
            oldestIndex = i; 
        }
    }
    return people[oldestIndex]; 
};

module.exports = findTheOldest;
