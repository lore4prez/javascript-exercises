const repeatString = function(someString, num) {
    if (num >= 0) {
        let finalString = "";
        for (let i = 0; i < num; i++)
            finalString = finalString + someString;
        return finalString;
    }
    else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
