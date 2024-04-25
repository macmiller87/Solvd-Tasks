function createImmutableObject(object) {

    const newObject = Object.assign({}, object);

    for(let property in newObject) {

        if (newObject.hasOwnProperty(property)) {

            if (newObject[property] instanceof Object) {
                newObject[property];
            }

            Object.defineProperty(newObject, property, { writable: false, configurable: false });
        }
    }

    return newObject;
}

const person = {
    name: "Chaves",
    age: 18,
    job: "humorist",
    keys: {
        numbers: [1, 2, 3, 4]
    }
};

const immutableObject = createImmutableObject(person);
console.log(Object.getOwnPropertyDescriptors(immutableObject));

console.log(immutableObject.keys.numbers);
Object.getOwnPropertyDescriptors(immutableObject.keys.numbers.push(88));
console.log(immutableObject.keys.numbers);
