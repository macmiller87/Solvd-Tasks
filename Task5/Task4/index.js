function getArrayIntersection(array1, array2) {

    const checkArrays = array1 instanceof Array && array2 instanceof Array;

    if(checkArrays === false) {
        throw new Error("Both arrays parameters must to be an [] !");
    }

    const commonElements = [];

    for(let i in array1) {

        for(let j in array2) {

            if(array1[i] === array2[j]) {
                commonElements.push(array1[i]);
            }
        }
    }

    return commonElements;
}

function getArrayUnion(array1, array2) {

    const checkArrays = array1 instanceof Array && array2 instanceof Array;

    if(checkArrays === false) {
        throw new Error("Both arrays parameters must to be an [] !");
    }

    const filterArray1 = array1.filter((current, index, arr) => {
        return arr.indexOf(current) === index;
    });

    const filterArray2 = array2.filter((current, index, arr) => {
        return arr.indexOf(current) === index;
    });

    const allElemtsFiltdBtwenTwoArrays = [];

    for(let i in filterArray1) {
        allElemtsFiltdBtwenTwoArrays.push(filterArray1[i]);
    }

    for(let j in filterArray2) {
        allElemtsFiltdBtwenTwoArrays.push(filterArray2[j]);
    }

    const allUniqueElements = allElemtsFiltdBtwenTwoArrays.filter((current, index, arr) => {
        return arr.indexOf(current) === index;
    }); 

    return allUniqueElements;
}

console.log(getArrayIntersection(["Kitana", 2, 3, "Mylena", 30, 87, 88], [30, 87, 88, "Kitana", "Sonia", 7, 8]));
console.log();
console.log(getArrayUnion([1, 1, 1, 2, 3, 1, 5, 6, 6, 7, 8, 8], [30, 87, 88, 5, 99, 7, 8, 99, 30, 1, 2]));