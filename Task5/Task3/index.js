function customShuffle(array) {

    const checkArray = array instanceof Array;

    if(checkArray === false) {
        throw new Error("The array parameter must to be a [] !");
    }

    const ramdomArray = array.sort(() => { return Math.random() - 0.5; });

    return ramdomArray;
}

function customShuffleAlgorithm(array) {

    const checkArray = array instanceof Array;

    if(checkArray === false) {
        throw new Error("The array parameter must to be a [] !");
    }

    for(let index = array.length - 1; index > 0; index--) {

        let randomNumber = Math.floor(Math.random() * (index + 1));

        let temp = array[index];

        array[index] = array[randomNumber];
        array[randomNumber] = temp;
    }

    return array;
}

console.log(customShuffle()); // Add an array
console.log(customShuffleAlgorithm()); // Add ana array 
