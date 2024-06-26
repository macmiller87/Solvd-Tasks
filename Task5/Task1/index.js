function customFilterUnique(array, callBack) {

    const checkArr = array instanceof Array;

    if(checkArr === false) {
        throw new Error("The array parameter must to be an [] or [{}]");
    }

    callBack = () => {

        let unsupportedParameters = false;

        for(let parameter in array) {

            if(typeof(array[parameter]) === "undefined" || array[parameter] === null) {
                unsupportedParameters = true;
            }
        }

        if(unsupportedParameters === true) {
            throw new Error("Unsupported types !");
            
        }else {

            // Case numbers
            let checkExecCaseNumber = false;
    
            for(let i = 0; i < array.length; i++) {
                if(typeof(array[i]) === "number") {
                    checkExecCaseNumber = true;
                }
            }

            const arrFilterNumbers = [... new Set(array)];

            const execCaseNumber = checkExecCaseNumber === true ? arrFilterNumbers : checkExecCaseNumber;
            
            // Case strings
            const arrStrings = [];
            let checkExecCaseString = false;
    
            for(let j = 0; j < array.length; j++) {
    
                if(typeof(array[j]) === "string") {
                    arrStrings.push(array[j]);
                    checkExecCaseString = true;   
                }
            }
    
            const joinStrings = arrStrings.join(" ");
            const filterStrings = [... new Set(joinStrings.split(/\W+/))];

            // Case object
            let execCaseObjec;
            
            if(execCaseNumber === false && checkExecCaseString === false) {

                const setFilterObject = new Set();

                execCaseObjec = array.filter((item) => {

                    const filteredItems = !setFilterObject.has(item.a, item.b);
                    setFilterObject.add(item.a, item.b);
        
                    return filteredItems;
                });
            }
    
            const result = 
                checkExecCaseNumber === true ? execCaseNumber : 
                checkExecCaseString === true ? filterStrings : 
                execCaseObjec;
    
            return result;
        }
    };

    return callBack();
}

const callBack = () => {};

const execCaseNumber = customFilterUnique([1, 1, 1, 2, 3, 1, 5, 6, 8, 7, 8, 8], callBack);
console.log(execCaseNumber); 
console.log();

const execCaseStrings = customFilterUnique(["May", "BlueMary", "May", "Robert", "Robert", "Terry"], callBack);
console.log(execCaseStrings);
console.log();

let arrayOfObjects = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 },
    { a: 7, b: 8 },
    { a: 9, b: 0 }
];

const execCaseObject = customFilterUnique(arrayOfObjects, callBack);
console.log(execCaseObject);
