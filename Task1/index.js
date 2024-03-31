function stringPlus(firstString, secondString) {

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(firstString) === true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(secondString) === true) {
        checkSecondString = true;
    }

    if(checkFisrtString === true && checkSecondString === true) {
        const resSum = parseInt(firstString) + parseInt(secondString);
        return resSum;
    }

    const { countFirst, countSecond } = CheckNumberOfDigits(firstString, secondString);

    let digtsFirst = "";
    let digtsSecond = "";

    for(let i = countFirst; i < firstString.length; i++) {
        digtsFirst += parseInt(firstString[i]);
    }

    for(let j = countSecond; j < secondString.length; j++) {
        digtsSecond += parseInt(secondString[j]); 
    }

    const resSum = parseInt(digtsFirst) + parseInt(digtsSecond);
    return resSum;
};

function stringMinus(firstString, secondString) {

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let aux = "";

    if(secondString > firstString) {
        aux = firstString;
        firstString = secondString;
        secondString = aux;
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(parseInt(firstString)) === true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(parseInt(secondString)) === true) {
        checkSecondString = true;
    }

    if(checkFisrtString === true && checkSecondString === true) {
        const resMinus = Math.abs(parseInt(secondString) - parseInt(firstString));
        return resMinus;
    } 

    const { countFirst, countSecond } = CheckNumberOfDigits(firstString, secondString);
    
    let digtsFirst = "";
    let digtsSecond = "";

    for(let i = countFirst; i < firstString.length; i++) {
        digtsFirst += parseInt(firstString[i]); 
    }

    for(let j = countSecond; j < secondString.length; j++) {
        digtsSecond += parseInt(secondString[j]); 
    }

    const resMinus = digtsSecond - digtsFirst;
    return Math.abs(resMinus);
};

function stringDivide(firstString, secondString) {

    if(firstString === "0" || secondString === "0") {
        return "Division By Zero is Not Possible !";
    }

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(parseInt(firstString)) === true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(parseInt(secondString)) === true) {
        checkSecondString = true;
    }

    if(checkFisrtString === true && checkSecondString === true) {
        const resDivide = parseInt(firstString) / parseInt(secondString);
        return Math.trunc(resDivide);
    }
    
    let digtsFirst = "";
    let digtsSecond = "";

    const { countFirst, countSecond } = CheckNumberOfDigits(firstString, secondString);

    for(let i = countFirst; i < firstString.length; i++) {
        digtsFirst += parseInt(firstString[i]); 
    }

    for(let j = countSecond; j < secondString.length; j++) {
        digtsSecond += parseInt(secondString[j]); 
    }

    const resDivide = digtsFirst / digtsSecond;
    return Math.trunc(resDivide);
};

function stringMultiply(firstString, secondString) {

    if(firstString < 0 || secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let checkFisrtString = false;
    let checkSecondString = false;

    if(checkLimitSafeIntegerFirstString(parseInt(firstString)) === true) {
        checkFisrtString = true;
    }

    if(checkLimitSafeIntegerSecondString(parseInt(secondString)) === true) {
        checkSecondString = true;
    }

    if(checkFisrtString === true && checkSecondString === true) {
        const resMultiply = parseInt(firstString) * parseInt(secondString);
        return resMultiply;
    }

    let digtsFirst = "";
    let digtsSecond = "";
    
    const { countFirst, countSecond } = CheckNumberOfDigits(firstString, secondString);

    for(let i = countFirst; i < firstString.length; i++) {
        digtsFirst += parseInt(firstString[i]); 
    }

    for(let j = countSecond; j < secondString.length; j++) {
        digtsSecond += parseInt(secondString[j]); 
    }

    const resMultiply = digtsFirst * digtsSecond;
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

function CheckNumberOfDigits(firstString, secondString, countFirst = 0, countSecond = 0)  {

    while(firstString.length < secondString.length) {
        firstString = "0" + firstString;
        countFirst++;
    }

    while(secondString.length < firstString.length) {
        secondString = "0" + secondString;
        countSecond++;
    }

    return {firstString, secondString, countFirst, countSecond};
};

console.log(stringPlus("", "")); // Add the value of FirstString and SecondString, Example "88", "92" or "49467894465165198"
console.log(stringMinus("", "")); // Add the value of FirstString and secondString.
console.log(stringDivide("", "")); // Add the value of FirstString and secondString.
console.log(stringMultiply("", "")) // Add the value of FirstString and secondString.
