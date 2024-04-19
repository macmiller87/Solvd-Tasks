function createCounter() {

    let count = 0;

    const counter = () => {
        count++;
        return count;
    };

    return counter;
}

function repeatFunction(functionn, numRepeated) {

    if(typeof(numRepeated) !== "number") {
        throw new Error("The numRepeated parameter must to be a number !");
    }

    const newFunction = () => {

        while(numRepeated > 0) {
            functionn();
            numRepeated--;
        }

        const checkNumRepeated = numRepeated < 0 ? true : false;

        while(checkNumRepeated === true) {
            functionn();
        }
    };

    return newFunction();
}

const execCounter = createCounter();
console.log(execCounter()); // this call return 1, if you want to check if the function is incrementing, add another call bellow.

const functionn = () => { console.log("") }; // Add a msg to check in the terminal.
repeatFunction(functionn, ); // Add a number for numRepeated.


