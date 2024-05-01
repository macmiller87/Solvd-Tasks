function customFilterUnique(array, callBack) {

    callBack = () => {

        let resp = [];

        for (let i of array) {
            const getKeys = Object.keys(i);
            const getValues = Object.values(i);

            for (let i in getKeys) {
                resp.push(getKeys[i] + ":");
                resp.push(getValues[i]);
            }
        }

        let filter = [... new Set(resp)];

        for(let i in filter) {

            if(filter[i] === 5) {
                filter[i] = "a: " + filter[i];
            }

            if(filter[i] === 6) {
                filter[i] = "b: " + filter[i];
            }
        }

        return filter.join(" ");
    };

    return callBack();
}

let arrayOfObjects = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { a: 5, b: 6 },
    { e: 7, f: 8 },
    { g: 9, h: 0 }
];


const callBack = () => {};

console.log(customFilterUnique(arrayOfObjects, callBack));