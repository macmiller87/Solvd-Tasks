function promisify(callbackStyleFunction) {

    const newFunction = (value) => {

        const promise = new Promise((resolve, reject) => {

            callbackStyleFunction(value, (error, value) => {
     
                let resp = value ? resolve(value) : reject(error);
                return resp;
            });
     
        });

        return promise;
    };

    return newFunction;
}

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });
