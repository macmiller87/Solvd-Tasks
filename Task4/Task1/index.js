const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",

    updateInfo(info) {
        Object.getOwnPropertyNames(info).forEach((property) => {

            if(Object.hasOwn(this, property) && Object.getOwnPropertyDescriptor(this, property).writable) {
                Object.defineProperty(this, property, { value: info[property] });
            }
        });
    }
};

for(let properties in person) {
    Object.defineProperty(person, properties, { writable: false });
}

Object.defineProperty(person, "address", {
    value: {},
    writable: true,
    enumerable: false,
    configurable:false
});

person.updateInfo({ address: { city: "São Paulo, Brazil" } });

console.log(person);
console.log(person.address.city);
