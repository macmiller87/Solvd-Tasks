function getFullName(person) {

    if(typeof(person) !== "object") {
        throw new Error("The Person parameter must be a object of person !");
    }

    if(typeof(person.firstName) !== "string") {
        throw new Error("The firstName parameter must to be a string !");
    }

    if(typeof(person.lastName) !== "string") {
        throw new Error("The lastName parameter must to be a string !");
    }

    let fullNamePerson = person.firstName + " " + person.lastName;

    return { person, fullNamePerson };
}

function filterUniqueWords(text) {

    if(typeof(text) !== "string") {
        throw new Error("The text parameter must be a string !");
    }

    let filter = [... new Set(text.toLowerCase().split(/\W+/).sort())];

    return filter;
}

function getAverageGrade(students) {

    let checkStudents = students instanceof Array ? true : false;

    if(checkStudents === false) {
        throw new Error("The students parameter must be an array of students !");
    }

    for(let i in students) {

        if(typeof(students[i].grade) !== "number") {
            throw new Error("The grade parameter must be a number !");
        }
    }

    let newArrayStudent = JSON.parse(JSON.stringify(students));

    let res = new Map();

    for(let j in newArrayStudent) {

        let key = newArrayStudent[j].name;
        let grade = newArrayStudent[j].grade;

        if(res.has(key)) {
            res.get(key).push(grade);

        }else {
            res.set(key, [grade])
        }
    }

    let result = Array.from(res.keys()).map((name) => (

        { 
          name: name, 
          grade: (res.get(name).reduce((item, sum) => { return item + sum }) / res.get(name).length) 
        }
    ));

    return { students, result };
}

console.log(getFullName()); // Add a person object with firstName and lastName properties
console.log(filterUniqueWords()); // Add a text as string
console.log(getAverageGrade()); // Add an array of student objects