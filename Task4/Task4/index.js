function createImmutableObject(object) {

    const newObject = Object.assign({}, object);

    const handleInnerObject = (innerObject) => {

        for(const property in innerObject) {

            if(innerObject.hasOwnProperty(property)) {
    
                if (innerObject[property] instanceof Object) {
                    handleInnerObject(innerObject[property]);
                }
    
                Object.defineProperty(innerObject, property, { writable: false, configurable: false });
            }
        }

    }

    handleInnerObject(newObject);
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
console.log(Object.getOwnPropertyDescriptors(immutableObject.keys.numbers));

immutableObject.keys.numbers[0] = 88;
console.log(immutableObject.keys.numbers);

