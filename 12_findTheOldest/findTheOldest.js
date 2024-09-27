const findTheOldest = function(arr) {
    /* 
    Sort the array from oldest to youngest (b-a)
    Return the very first element in the array (the oldest) as an object
    */

    arr = arr.map((item) => {
        let date = new Date().getFullYear();
        if (item.hasOwnProperty("yearOfDeath")) {
            return {
                name: item.name,
                age: item.yearOfDeath - item.yearOfBirth
            }
        }
        else {
            return {
                name: item.name,
                age: date - item.yearOfBirth
            }
        }
    })


    arr.sort((a,b) => b.age - a.age);
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
