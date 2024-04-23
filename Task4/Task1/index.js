const person = {
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

const personInfo = {
    firstName: "Shiryu",
    lastName: "Dragon",
    age: 37,
    email: "knightsoftheZodiac@gmail.com",
};

const resUpdatePersonInfo = person.updateInfo(personInfo);

console.log(person);
console.log(person.adress = {  address: "somewhere in the world"  });
console.log(resUpdatePersonInfo);

