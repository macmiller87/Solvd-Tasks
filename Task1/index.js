function stringPlus(firstString, secondString) {

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(firstString) == true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(secondString) == true) {
        checkSecondString = true;
    }

    if(checkFisrtString == true && checkSecondString == true) {
        const resSum = parseInt(firstString) + parseInt(secondString);
        return resSum;
    }

    CheckNumberOfDigits(firstString, secondString);

    const resSum = BigInt(firstString) + BigInt(secondString);
    return resSum;
};

function stringMinus(firstString, secondString) {

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let aux = "0";

    if(secondString > firstString) {
        aux = firstString;
        firstString = secondString;
        secondString = aux;
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(parseInt(firstString)) == true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(parseInt(secondString)) == true) {
        checkSecondString = true;
    }

    if(checkFisrtString == true && checkSecondString == true) {
        const resMinus = Math.abs(parseInt(secondString - firstString));
        return resMinus;
    } 
    
    CheckNumberOfDigits(firstString, secondString);

    const resMinus = BigInt(firstString) - BigInt(secondString);
    return resMinus;
};

function stringDivide(firstString, secondString) {

    if(parseInt(firstString) == 0 || parseInt(secondString) == 0) {
        return "Division By Zero is Not Possible !";
    }

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let aux = "0";

    if(secondString > firstString) {
        aux = firstString;
        firstString = secondString;
        secondString = aux;
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(parseInt(firstString)) == true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(parseInt(secondString)) == true) {
        checkSecondString = true;
    }

    if(checkFisrtString == true && checkSecondString == true) {
        const resDivide = Math.abs(parseInt(firstString / secondString));
        return resDivide;
    }
    
    CheckNumberOfDigits(firstString, secondString);

    const resDivide = BigInt(firstString) / BigInt(secondString);
    return resDivide;
};

function stringMultiply(firstString, secondString) {

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(parseInt(firstString)) == true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(parseInt(secondString)) == true) {
        checkSecondString = true;
    }

    if(checkFisrtString == true && checkSecondString == true) {
        const resMultiply = parseInt(firstString * secondString);
        return resMultiply;
    }
    
    CheckNumberOfDigits(firstString, secondString);

    const resMultiply = BigInt(firstString) * BigInt(secondString);
    return resMultiply;
};










function checkLimitSafeIntegerFirstString(firstString) {

    // MAX_SAFE_INTEGER = 9007199254740991
    if(Math.abs(firstString) > Number.MAX_SAFE_INTEGER) {
        return console.log("The First Number is Not a Safe Integer in JS !");
    }

    return true;
};

function checkLimitSafeIntegerSecondString(secondString) {

    // MAX_SAFE_INTEGER = 9007199254740991
    if(Math.abs(secondString) > Number.MAX_SAFE_INTEGER) {
        return console.log("The Second Number is Not a Safe Integer in JS !");
    }

    return true;
};

function CheckNumberOfDigits(firstString, secondString)  {

    while(firstString.length < secondString.length) {
        firstString = "0" + firstString;
    }

    while(secondString.length < firstString.length) {
        secondString = "0" + secondString;
    }

    return firstString, secondString;
};

console.log(stringPlus("", "")); // Add the value of FirstString and SecondString, Example "88", "92" or "49467894465165198"
console.log(stringMinus("", "")); // Add the value of FirstString and secondString.
console.log(stringDivide("", "")); // Add the value of FirstString and secondString.
console.log(stringMultiply("", "")) // Add the value of FirstString and secondString.
