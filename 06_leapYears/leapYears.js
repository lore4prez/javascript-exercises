const leapYears = function(currentYear) {
    if (currentYear % 4 != 0) return false;
    else {
        if (currentYear % 100 == 0 && currentYear % 400 != 0) return false;
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
