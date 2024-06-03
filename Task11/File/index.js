import _ from "lodash";

function myJSONParse(jsonString) {

    const regex = /(\[)|(\])|(\{)|(\})|(\:)|(,)|(null)\b|(true)\b|(false)\b|(-?\d+(?:\.\d+)?)|(\"(?:\\\"|[^\"])*\")|([^\[\]{}:,\"\s]+)/g;

    let stack = [];
    let elements = [];
	let currentObject = null;
	let key = null;
	let object = null;

	Array.from(jsonString.matchAll(regex)).forEach(match => {
		let lastElement = elements[elements.length - 1];
		let isBracketsOpen;

		switch (match[0]) {

			case '{':
				if(lastElement !== undefined && lastElement[0] !== '[') {
					elements.pop();
				}

				if(currentObject === null) {
					currentObject = {};
					break;
				}

				const newObj = {};
				addField(currentObject, key, newObj);
				key = null;
				stack.push(currentObject);
				currentObject = newObj;
				break;

			case '}':
				isBracketsOpen = lastElement[0] === '{' || (elements.length !== 0 && elements.pop()[0] === '{');
				currentObject = stack[stack.length - 1] !== undefined ? stack.pop() : currentObject;
				object = currentObject;
				break;

			case ':':
				break;

			case ',':
				lastElement = elements.pop();
				break;

			case '[':
				if(lastElement[0] !== '[') {
					elements.pop();
				}

				const newArray = [];
				addField(currentObject, key, newArray);
				key = null;
				stack.push(currentObject);
				currentObject = newArray;
				break;

			case ']':
				isBracketsOpen = lastElement[0] === '[' || elements.pop()[0] === '[';
				currentObject = stack[stack.length - 1] ? stack.pop() : currentObject;
				break;

			default:
				if(Array.isArray(currentObject)) {
					let value = castValue(match[0]);
					currentObject.push(value);

				}else if(key === null) {
					key = match[0].slice(1, -1);

				}else {
					currentObject[key] = castValue(match[0]);
					key = null;
				}
		}

		elements.push(match);
	});

	return object;
}


/**
 * Casts value to primitive.
 * @param element
 * @returns {null|boolean|number|*}
 */

function castValue(element) {

    if(element === 'true' || element === 'false') {
        return element === 'true';

    }else if(element === 'null') {
        return null;

    }else if(!Number.isNaN(parseInt(element))) {
        return parseFloat(element);

    }else {
        return element.slice(1, -1);
    }
}
    
/**
 * Create a field for object or add element into the array.
 * @param object
 * @param key
 * @param value
 */

function addField(object, key, value) {

    if(Array.isArray(object)) {
        object.push(value);

    }else {
        object[key] = value;
    }
}



// Case 1
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = myJSONParse(jsonString);

console.log();
console.log(jsonObject);
console.assert(_.isEqual({ name: 'John', age: 30, city: 'New York' }, jsonObject));
console.log();

// Case 2
const jsonString2 = '{"name": "null", "age": 30, "city": "New York"}';
const jsonObject2 = myJSONParse(jsonString2);

console.log(jsonObject2);
console.assert(_.isEqual({ name: 'null', age: 30, city: 'New York' }, jsonObject2));
console.log();

// Case 3
const jsonString3 = '{"name": "John", "age": 30, "city": {"name": "New York", "country": "USA"}}';
const jsonObject3 = myJSONParse(jsonString3);

console.log(jsonObject3);
console.assert(_.isEqual({ name: 'John', age: 30, city: { name: "New York", country: "USA" }}, jsonObject3));
console.log();

// Case 4
const jsonString4 = '{"name": "John", "age": 30, "cities": [{"name": "New York", "country": "USA"}, {"name": "Sao Paulo", "country": "Brazil"}]}';
const jsonObject4 = myJSONParse(jsonString4);

console.log(jsonObject4);
console.assert(_.isEqual({ name: 'John', age: 30, cities: [{ name: "New York", country: "USA" }, { name: "Sao Paulo", country: "Brazil" }]}, jsonObject4));
console.log();

// Case 5
const jsonString5 = `{

	"id": "85194d50-7e8e-40b4-98ff-26c80779660b",
	"index": 8,
	"negativeIndex": -8,
	"anEmptyArray": [],
	"notEmptyArray": [1, 2, 3,"string", true, null],
	"boolean": true,
	"nullValue": null,
}`;

const jsonObject5 = myJSONParse(jsonString5);
console.log(jsonObject5);

console.assert(
	
	_.isEqual(

		{
			"id": "85194d50-7e8e-40b4-98ff-26c80779660b",
			"index": 8,
			"negativeIndex": -8,
			"anEmptyArray": [],
			"notEmptyArray": [1, 2, 3,"string", true, null],
			"boolean": true,
			"nullValue": null,
			
		}, 
		
		jsonObject5
	)
);
console.log();
