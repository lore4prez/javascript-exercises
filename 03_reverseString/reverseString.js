const reverseString = function(word) {
    let emptyString = "";
    const lettersArr = word.split("");
    for (let i = word.length-1; i >= 0; i--) {
        emptyString += lettersArr[i];
    }
    return emptyString;
};

// Do not edit below this line
module.exports = reverseString;
