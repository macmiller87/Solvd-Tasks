function deepCloneObject(object) {

    if(typeof(object) !== "object" || object === null || 'isActiveClone' in object) {
        return object;
    }

    let clone;

    if(object instanceof Date) {
        clone = new object.constructor();

    }else {
        clone = object.constructor();
    }

    for(let key in object) {

        if(Object.prototype.hasOwnProperty.call(object, key)) {
            object['isActiveClone'] = null;
            clone[key] = deepCloneObject(object[key]);
            delete object['isActiveClone'];
        }
    }   

    return clone;
}

const course = {
    name: "Computer Science",
    graduationType: "Bachelor´s degree",
    duration: 5,
    subjects: [
        {
            name: "algorithms",
        },
        {
            name: "back-end"
        }
    ]
}

const cloneObject = deepCloneObject(course);

console.log(deepCloneObject(cloneObject));

