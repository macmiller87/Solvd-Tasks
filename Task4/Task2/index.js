const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

Object.defineProperty(product, "price", {
    enumerable: false,
    writable: false
});

Object.defineProperty(product, "quantity", {
    enumerable: false,
    writable: false
});

function getTotalPrice(product) {

    const getPrice = Object.getOwnPropertyDescriptor(product, "price");
    const getQuantity = Object.getOwnPropertyDescriptor(product, "quantity");

    const totalPrice = getPrice.value * getQuantity.value;

    return `The totalPrice is : ${totalPrice}`;
}

const person = {
    name: "Sub-Zero",
    age: 38,
    job: "figther"
};

function deleteNonConfigurable(person, property) {

    if(Object.hasOwn(person, property) === false) {
        throw new Error("The property dosen't exists in object !");

    }else {

        if(!Object.getOwnPropertyDescriptor(person, property).configurable) {
            throw new Error(`The ${property} property can't be deleted, because the (defineProperty) of this property it's seted as (non-configurable) !`);

        }else {

            delete person[property];

            return console.log(`The property ${property} was deleted with sucess !`);
        }

    }
}

//Object.defineProperty(person, "", { configurable: false }); // For do test about the configurable property, please uncomment this line, and add the name of the property inside the quotation marks that you wanted config.

console.log(getTotalPrice(product));
console.log(person);

deleteNonConfigurable(person, ""); // Add the name of the property of the object (person), that you wanted deleted
console.log(person);
