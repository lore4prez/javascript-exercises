const removeFromArray = function(list, ...moreArgs) {
    let newArr = [];
    for (let i = 0; i < list.length; i++) {
        if (!(moreArgs.includes(list[i]))) {
            newArr.push(list[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
