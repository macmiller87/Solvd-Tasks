function lazyMap(functionn, array) {

    let checkArray = array instanceof Array ? true : false;

    if(checkArray === false) {
        throw new Error("The array parameter must be a array [] !");
    }

    const newFunction = () => {

        let index = 0;

        while(index < array.length) {
            functionn(array[index++]);
        }
    };

    return newFunction();
}

function fibonacciGenerator() {

    let index = 0;
    let numbers = [1, 1];

    const newFunction = () => {

        if (index === 0 || index === 1) {
            index++
            return 1;
        }

        let result = numbers[0] + numbers[1];

        numbers[0] = numbers[1];
        numbers[1] = result;

        index++;

        return result;
    }

    return newFunction;
}

const functionn = (number) => { console.log() }; // Add the math operation that you want using the parameter (number) inside the console.log();
lazyMap(functionn, ); // Add an array






let exec = fibonacciGenerator();
const sequence = [];

const addValueforLooping = (number) => {

    for (let i = 0; i < number; i++) {
        sequence.push(exec());
    }
}

addValueforLooping(); // Add a number to the (for loop) for the sequence size the fibonacci
console.log(sequence.toString());

