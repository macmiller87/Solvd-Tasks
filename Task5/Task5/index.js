function measureArrayPerformance(functionn, array) {

    const checkArray = array instanceof Array;

    if(checkArray === false) {
        throw new Error("The array parameter must to be an [] !");
    }

    const newFunction = (array) => {

        functionn();
        return array ;
    };

    return newFunction(array);
}

function someTypesOfArrayManipulaton(array, arrayMethod) {

    const checkArray = array instanceof Array;

    if(checkArray === false) {
        throw new Error("The array parameter must to be an [] !");
    }

    if(typeof(arrayMethod) === "string") {  

        if(arrayMethod.match(/Filter/i)) {

            const filter = array.filter((item) => { return item % 2 === 0 });

            return `The ${arrayMethod} method, was choosen ........\n\nThe even numbers is: ${filter}`

        }else if(arrayMethod.match(/Map/i)) {

            const map = array.map((item) => { return item ** 2 });

            return `The ${arrayMethod} method, was choosen ........\n\nThe result of the numbers raised to 2 is: ${map}`;

        }else if(arrayMethod.match(/Reduce/i)) {

            const reduce = array.reduce((acc, curr) => { return acc + curr });

            return `The ${arrayMethod} method, was choosen ........\n\nThe Sum of every elemts of the array is: ${reduce}`;

        }else if(arrayMethod.match(/For/i)) {

            const oddNumbers = [];

            for(let i = 0; i <= array.length; i++) {
                
                if(array[i] % 2 !== 0) {
                    oddNumbers.push(array[i]);
                }
            }

            return `The ${arrayMethod} method, was choosen ........\n\nThe odd numbers is: ${oddNumbers}`;

        }else if(arrayMethod.match(/while/i)) {

            let sumOfEvenNumbers = 0;

            let index = 0;

            while(index < array.length) {
                
                if(array[index] % 2 === 0) {
                    sumOfEvenNumbers += array[index];
                }

                index++;
            }

            return `The ${arrayMethod} method, was choosen ........\n\nThe sum of even numbers is: ${sumOfEvenNumbers}`;

        }else if(arrayMethod.match(/do/i)) {

            let sumOfOddNumbers = 0;

            let index = 0;

            do {
                
                if(array[index] % 2 !== 0) {
                    sumOfOddNumbers += array[index];
                }

                index++;

            }while(index < array.length);

            return `The ${arrayMethod + " while"} method, was choosen ........\n\nThe sum of odd numbers is: ${sumOfOddNumbers}`;

        }else {
            throw new Error("Unsupported Method !");
        }

    }

    throw new Error("The array parameter must to be a string !");
}

const timeStartMeasureArrayPerformance = Date.now();

const functionn = () => {};
const execTotalTimeExecution = measureArrayPerformance(functionn, [1, 2, 3, 4, 5, 6, 7, 8]);
console.log(execTotalTimeExecution);

const timeEndMeasureArrayPerformance = Date.now();

console.log();
const totalTimeToExecutionCase1 = timeEndMeasureArrayPerformance - timeStartMeasureArrayPerformance;
console.log(`The total time of the measureArrayPerformance function execution is: ${totalTimeToExecutionCase1} milliseconds` );






console.log();
console.log("---------------------------------------------------------------------------------------");
console.log();







const timeStartSomeTypesOfArrayManipulaton = Date.now();
console.log(someTypesOfArrayManipulaton([1, 2, 3, 4, 5, 6, 7, 8], "")); // For tests please .. Add the arrayMethod name between the follow options { filter, map, reduce, for, while and do }, inside the quotation marks
const timeEndSomeTypesOfArrayManipulaton = Date.now();

console.log();
const totalTimeToExecutionCase2 = timeEndSomeTypesOfArrayManipulaton - timeStartSomeTypesOfArrayManipulaton;
console.log(`The total time of the someTypesOfArrayManipulaton function execution is: ${totalTimeToExecutionCase2} milliseconds` );
