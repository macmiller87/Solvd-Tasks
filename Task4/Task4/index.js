function createImmutableObject(object) {

    const newObject = Object.assign({}, object);

    for(let properties in newObject) {
        Object.defineProperty(newObject, properties, { writable: false, configurable: false });
    }

    return newObject;
}

const person = {
    name: "Chaves",
    age: 18,
    job: "humorist"
};


const personFromTask1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",

    updateInfo(info) {
        this.firstName = info.firstName,
        this.lastName = info.lastName,
        this.age = info.age,
        this.email = info.email

        return info;
    }
}

console.log("Person Object");
const descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);

console.log("###############################################################################");

console.log("ImmutableObject")
const exec = createImmutableObject(person);
console.log(Object.getOwnPropertyDescriptors(exec));
console.log(Object.getOwnPropertyDescriptor(exec, "name").value);

console.log("###############################################################################");

console.log("ImmutableObject from Person Task1")
const exec2 = createImmutableObject(personFromTask1);
console.log(Object.getOwnPropertyDescriptors(exec2));