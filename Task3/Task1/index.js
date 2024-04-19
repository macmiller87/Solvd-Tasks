function calculateDiscountedPrice(products, discount) {

    let checkProducts = products instanceof Array ? true : false;

    if(checkProducts === false) {
        throw new Error("The Products parameter must be a array of products !");
    }

    if(typeof(discount) !== "number") {
        throw new Error("The Discount parameter must be a number !");
    }
 
    for(let i in products) {

        if(typeof(products[i].price) !== "number") {
            throw new Error("The Price parameter must be a number, must have a value !");
        }
    }

    let newArrayProductsDiscount = JSON.parse(JSON.stringify(products));

    for(let j in newArrayProductsDiscount) {
        newArrayProductsDiscount[j].price = newArrayProductsDiscount[j].price * ((100 - discount) / 100);
    }

    return { products, newArrayProductsDiscount };
}

function calculateTotalPrice(products) {

    let checkProducts = products instanceof Array ? true : false;

    if(checkProducts === false) {
        throw new Error("The Products parameter must be a array of products !");
    }

    for(let i in products) {

        if(typeof(products[i].price) !== "number") {
            throw new Error("The Price parameter must be a number, must have a value !");
        }
    }

    let newArrayProducts = JSON.parse(JSON.stringify(products));
    let totalPrices = 0;

    for(let j in newArrayProducts) {
        totalPrices += newArrayProducts[j].price;
    }

    return { products, totalPrices };    
}

console.log(calculateDiscountedPrice()); // Add an array of products and a discount 
console.log(calculateTotalPrice()); // Add an array of products