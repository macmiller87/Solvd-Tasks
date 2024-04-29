function chunkArray(array, chunkSize) {

    const checkArray = array instanceof Array ;

    if(checkArray === false) {
        throw new Error("The parameter array must to be an [] !");
    }

    let resp = [];
    let index = 0;

    while(index < array.length) {
        const sliceArray = array.slice(index, index+= chunkSize);
        resp.push(sliceArray);
    }

    return resp;
}

console.log(chunkArray([], )); // Add an array and a chunkSize