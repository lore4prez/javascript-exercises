const getTheTitles = function(arr) {
    let tempArr = arr.splice(0,arr.length);
    let res = tempArr.map((item) => item = item.title);
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
