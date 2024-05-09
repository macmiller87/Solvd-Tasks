function chainPromises(arrFunctions) {

    let promise = new Promise((resolve, reject) => {

       resolve();
    });

    let index = 0;

    while(index < arrFunctions.length) {

        promise = promise.then(arrFunctions[index]);

        index++;
    }

    return promise;
}

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
    //return Promise.reject(new Error("Error on function 1")); // For testing .... please uncomment this line.
}


function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
    //return Promise.reject(new Error("Error on function 2")); // For testing .... please uncomment this line.
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
    //return Promise.reject(new Error("Error on function 3")); // For testing .... please uncomment this line.
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });