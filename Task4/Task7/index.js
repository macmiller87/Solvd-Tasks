function validateObject(object, schema) {

    const checkObjectProperties = Object.getOwnPropertyNames(object);
    const checkSchemaProperties = Object.getOwnPropertyNames(schema);

    if(checkObjectProperties.length !== checkSchemaProperties.length) {
        return false;
    }

    let countCheckValuesFalse = 0;
    let countCheckTypesFalse = 0;

    for(let parameter in object) {

        const checkValues = object[parameter] !== schema[parameter].value ? false : true;

        if(checkValues === false) {
            countCheckValuesFalse++;
        }

        const checkTypes = typeof(object[parameter]) !== schema[parameter].type ? false : true;

        if(checkTypes === false) {
            countCheckTypesFalse++;
        }
    }

    const resp = countCheckValuesFalse === 0 && countCheckTypesFalse === 0 ? true : false;

    return resp;
}

const person = {
    name: "ken Master",
    age: 22,
    job: "figther",
    titleGame: "Street Fighter"
}

const schema = {
    name: {
        value: "ken Master",
        type: "string"
    },

    age: {
        value: 22,
        type: "number"
    },
    
    job: {
        value: "figther",
        type: "string"
    },

    titleGame: {
        value: "Street Fighter",
        type: "string"
    }
}

// For tests ... you can change any value of object (person), for values testing.
// For tests ... you can change any type of the object (schema), for types testing.

console.log(validateObject(person, schema));