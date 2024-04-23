function observeObject(object, callback) {

    const proxy = new Proxy(object, {

        get(target, property, receiver) {

            const getTarget = Reflect.get(target, property, receiver);
            callback(property, "get");
            return getTarget;
        },
        

        set(target, property, receiver) {
            
            const setTarget = Reflect.set(target, property, receiver);
            callback(property, "set");
            return setTarget;
        }
    });

    return proxy;
}

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

const observe = observeObject(personFromTask1, (property, action) => {
    console.log(`The ${property} was ${action}`);
});

console.log(observe.firstName);

console.log();

const person = {
    firstName: "Terry",
    lastName: "Bogard",
    age: 22,
    email: "bogard@gmail.com"
}

console.log(observe.updateInfo(person));


