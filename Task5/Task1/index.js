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
            let execCaseObject;
            
            if(execCaseNumber === false && checkExecCaseString === false) {

                const setFilterObject = new Set();

                execCaseObject = array.filter((item) => {

                    if(item.name === undefined || item.name === null || item.age === undefined || item.age === null) {
                        throw new Error("Unsupported types !");
                    }

                    const filteredItems = !setFilterObject.has(item.name);
                    setFilterObject.add(item.name);
        
                    return filteredItems;
                });
            }
    
            const result = 
                checkExecCaseNumber === true ? execCaseNumber : 
                checkExecCaseString === true ? filterStrings : 
                execCaseObject;
    
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

const execCaseObject = customFilterUnique([{ name: "SubZero", age: 28 }, { name: "Scorpion", age: 22 }, { name: "SubZero", age: 28}], callBack);
console.log(execCaseObject);

