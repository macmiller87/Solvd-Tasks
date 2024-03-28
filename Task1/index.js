function stringPlus(firstString, secondString) {

    if(firstString < 0 ||secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    const resSum = parseInt(firstString) + parseInt(secondString);
    return resSum;
}

function stringMinus(firstString, secondString) {

    if(firstString < 0 ||secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    let aux = "0";

    if(secondString > firstString) {
        aux = firstString;
        firstString = secondString;
        secondString = aux;
    }

    const resMinus = Math.abs(parseInt(secondString - firstString));
    return resMinus;
}

function stringDivide(firstString, secondString) {

    if(firstString < 0 ||secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    const resDivide = Math.abs(parseInt(firstString / secondString));
    return resDivide;
}

function stringMultiply(firstString, secondString) {

    if(firstString < 0 ||secondString < 0) {
        firstString = Math.abs(firstString);
        secondString = Math.abs(secondString);
    }

    const resMultiply = parseInt(firstString * secondString);
    return resMultiply;
}

console.log(stringPlus("", "")); // Add the value of FirstString and SecondString, Example "88", "92".
console.log(stringMinus("", "")); // Add the value of FirstString and secondString.
console.log(stringDivide("", "")); // Add the value of FirstString and secondString.
console.log(stringMultiply("", "")) // Add the value of FirstString and secondString.
