function stringPlus(firstString, secondString) {

    let resSum = "";
    let carry = 0;

    let i = firstString.length - 1;
    let j = secondString.length - 1;

    while(i >= 0 || j >= 0 || carry) {
        let digtsFirst = firstString[i] || "0";
        let digtsSecond = secondString[j] || "0";

        let sum = parseInt(digtsFirst) + parseInt(digtsSecond) + carry;
        let rest = sum % 10;

        resSum = rest + resSum;

        carry = sum >= 10 ? 1 : 0;

        j--;
        i--;
    }

    return resSum;
};

function stringMinus(firstString, secondString) {

    let aux = "";

    if(secondString > firstString) {
        aux = firstString;
        firstString = secondString;
        secondString = aux;
    }
   
    ({ firstString, secondString } = CheckNumberOfDigits(firstString, secondString));

    let resMinus = "";
    let carry = 0;

    for(let i = firstString.length - 1; i >= 0; i--) {
        let digtsFirst = firstString[i];
        let digtsSecond = secondString[i];

        let minus = parseInt(digtsFirst) - parseInt(digtsSecond) - carry;

        if(minus < 0) {
            minus += 10;
            carry = 1;
        }else {
            carry = 0;
        }

        resMinus = minus + resMinus;
    }

    resMinus = cleanZeros(resMinus);

    return resMinus;
};


function stringDivide(firstString, secondString) {

    if(firstString === "0" || secondString === "0") {
        return "Division By Zero is Not Possible !";
    }

    let dividend = "";
    let divisor = "";

    if(firstString > secondString) {
        dividend = (firstString);
        divisor = (secondString);
    }else {
        dividend = (secondString);
        divisor = (firstString);
    }

    let resDivide = "";
    let currentValue = 0;

    for(let i = 0; i < dividend.length; i++) {;

        currentValue = currentValue * 10 + Number(dividend[i]);

        let quot = 0;

        while(currentValue >= divisor) {
            currentValue -= divisor;
            quot++;
        }

        resDivide += quot;
    }

    resDivide = cleanZeros(resDivide);

    return resDivide;
}

function stringMultiply(firstString, secondString) {

    if(firstString === "0" || secondString === "0") {
        return "0";
    }

    const resMultiply = [];

    for(let i = firstString.length - 1; i >= 0; i--) {

        for(let j = secondString.length - 1; j >= 0; j--) {

            const pos1 = i + j;
            const pos2 = i + j + 1;

            const product = parseInt(firstString[i]) * parseInt(secondString[j]);

            const sum = (resMultiply[pos2] ?? 0) + product;

            resMultiply[pos1] = (resMultiply[pos1] ?? 0) + Math.floor(sum / 10);
            resMultiply[pos2] = sum % 10;
        }
    }

    resMultiply[0] === 0 && resMultiply.shift();

    return resMultiply.join('');
}







function CheckNumberOfDigits(firstString, secondString)  {

    while(firstString.length < secondString.length) {
        firstString = "0" + firstString;
    }

    while(secondString.length < firstString.length) {
        secondString = "0" + secondString;
    }

    return { firstString, secondString };
};

function cleanZeros(result) {

    while(result[0] === '0') {
        result = result.substring(1);
    }

    return result;
}

console.log(stringPlus("", "")); // Add the value of FirstString and SecondString, Example "88", "92" or "49467894465165198"
console.log(stringMinus("", "")); // Add the value of FirstString and secondString.
console.log(stringDivide("", "")); // Add the value of FirstString and secondString, OBS(Always the biggest Number will be the (dividend)).
console.log(stringMultiply("", "")) // Add the value of FirstString and secondString.
