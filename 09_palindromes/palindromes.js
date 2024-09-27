const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    str = str.replace(/[^\w\s]/g, "");
    let arr = str.split("");
  
    let tempArr = arr.splice(0, arr.length);
    let reverseArr = tempArr.reverse();
    let reverseStr = reverseArr.join("");
    reverseStr = reverseStr.replaceAll(" ", "");
    // console.log("String: " + str + "\nReverse: " + reverseStr);
    if (str == reverseStr) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
