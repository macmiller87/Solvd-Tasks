function calculateFactorial(num) {

    if(typeof(num) !== "number") {
        throw new Error("The num parameter must to be a number !");
    }

    let resNumFact = num === 0 ? 1 : num * calculateFactorial(num - 1);

    return resNumFact;
}

function power(base, exponent) {

    if(exponent < 0) {
        throw new Error("The exponent parameter must be major than 0 !")
    }

    if(typeof(base) !== "number") {
        throw new Error("The base parameter must be a number !");
    }

    if(typeof(exponent) !== "number") {
        throw new Error("The exponent parameter must be a number !");
    }

    let resCalcExpo = exponent === 0 ? 1 : base * power(base, exponent - 1);

    return resCalcExpo;
} 

console.log(calculateFactorial()); // Add a number
console.log(power()); // Add a number for base and exponent