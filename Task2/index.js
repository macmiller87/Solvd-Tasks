function addValues(firstParam, secondParam) {

    if(typeof(firstParam) === "undefined" || typeof(secondParam) === "undefined") {
        throw new Error("You can't add add parameters undefined");
    }

    if(firstParam instanceof Array  && !secondParam instanceof Array || secondParam instanceof Array  && !firstParam instanceof Array) {
        throw new Error("You cannot add a parameter of type object with a second different parameter type!")
    }

    if(firstParam instanceof Array  && secondParam instanceof Array) {
        return firstParam.concat(secondParam);
    }

    let err = Error("Parameters not Supported");
    
    let result = 
        typeof(firstParam) || typeof(secondParam) === "string" ? firstParam + secondParam :
        typeof(firstParam) || typeof(secondParam) === "number" ? firstParam + secondParam :
        typeof(firstParam) || typeof(secondParam) === "boolean" ? firstParam + secondParam === 1 : err;
    
    return result;
}

function stringifyValue(singleParam) {

    let result = 
        singleParam instanceof Array ? JSON.stringify(singleParam) :
        singleParam instanceof Object ? JSON.stringify(singleParam) : 
        typeof(singleParam) === "boolean" ? singleParam.toString() : singleParam.toString();
    
    return result;
}

function invertBoolean(singleBooleanParam) {

    let result = typeof(singleBooleanParam) === "boolean" ? singleBooleanParam === false : Error("The parameter isn't a boolean parameter !")

    return result;
}

function convertToNumber(singleParam) {

    if(typeof(singleParam) === "string" && singleParam.includes(".")) {
        let aux = parseFloat(singleParam);
        return aux;

    }else if(typeof(singleParam) === "string" && singleParam.includes(",")) {
        singleParam = singleParam.replace(",", ".");
        let aux = parseFloat(singleParam);
        return aux;

    }else if(typeof(singleParam) === "string") {
        let aux = parseInt(singleParam); ;
        return aux;

    }else if(typeof(singleParam) === "boolean") {
        let aux = singleParam ? 1 : 0;
        return aux;   

    }else {
        throw new Error("Parameter not Supported");
    }
}

function coerceToType(value, type) {

    if(typeof(value) === "object" && type === "string") {
        let case1 = typeof(value) === "object" && type === "string" ? JSON.stringify(value) : value.toString();
        return case1;
    }

    if(typeof(value) === "string" && type === "number") {
        let case2 = typeof(value) === "string" && type === "number" ? convertToNumber(value) : Error("The coercion isn't possible !");
        return case2;
    }

    if(typeof(value) === "boolean" || typeof(value) === "boolean"  && type === "number") {
        let case3 = typeof(value) === "boolean" && type === "number" ? convertToNumber(value) : Error("The coercion isn't possible !");
        return case3;
    }

    if(typeof(value) == "number" && type === "boolean") {
        let case4 = typeof(value) == "number" && type === "boolean" ? value === 1 : Error("The coercion isn't possible");
        return case4;
    }

    if(typeof(value) == "string" && type === "boolean") {
        let case5 = typeof(value) == "string" && type === "boolean" ? value === "1" || value === "true" : Error("The coercion isn't possible");
        return case5;
    }

    throw new Error("The coercion isn't possible");
}

console.log(addValues()); // Add firstParam and secondParam.
console.log(stringifyValue()); // Add singleParam.
console.log(invertBoolean()); // Add singleBooleanParam.
console.log(convertToNumber()); // Add singleParam.
console.log(coerceToType()); // add value and type.
