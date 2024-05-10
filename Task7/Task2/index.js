function promiseAllSettled(arrPromises) {

    const promise = new Promise((resolve, reject) => {

        const aux = [];
        
        let count = 0;

        for(let i in arrPromises) {

            arrPromises[i]

            .then((values) => {

                aux[i] = values;

                if(typeof(aux[i]) === "number") {

                    aux[i] = {
                        status: "fulfilled",
                        value: aux[i]
                    }

                    count++;
                }
            })
            .catch((error) => {

                aux[i] = {
                    status: "rejected",
                    reason: aux[i] === undefined ? error : aux[i]
                }

                count++;
            })
            .finally(() => {

                if(count === arrPromises.length) {
                    resolve(aux);
                }
            });
        }
    });

    return promise;
}

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];
  
promiseAllSettled(promises)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });

