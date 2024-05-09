function promiseAll(arrPromises) {

    const promise = new Promise((resolve, reject) => {

        const aux = [];

        let count = 0;
        
        for(let i in arrPromises) {

            arrPromises[i]

            .then(values => {

                aux.push(values);
                count++;

                if(count === arrPromises.length) {
                    resolve(aux);
                }
            })
            .catch(error => {
                reject(error);
            });
            
        }
    });

    return promise;
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    //Promise.reject(new Error("Simulating an error !")) // For testing .... please uncomment this line.
  ];
  
promiseAll(promises)

    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error); // Expected: Simulating an error !
    });
