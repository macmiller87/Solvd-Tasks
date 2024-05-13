#### Repository With Tasks From Solvd's NodeJs Course

#### Tasks Enunciated

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task1">Task 1</a></summary>

#### String Arithmetic Operations.

- Task: Your task is to implement arithmetic operations on strings without relying on bigint or arithmetic libraries. You need to create functions that perform arithmetic operations as string functions, considering only positive integers (negative numbers can be avoided, as all numbers will be positive integers).

- Functions to Implement:

###### String.plus(string): 
- This function should take another string as input and return the result of adding the two strings together.

###### String.minus(string): 
- This function should take another string as input and return the result of subtracting the second string from the first string. Note that the first parameter will always be greater than the second parameter.

###### String.divide(string): 
- This function should take another string as input and return the result of dividing the first string by the second string. Division should only result in an integer value.

###### String.multiply(string): 
- This function should take another string as input and return the result of multiplying the two strings together.

`Constraints`:

- All input and output numbers will be positive integers.
For subtraction, ensure that the first parameter is always greater than the second parameter.
Division should only result in an integer value.
</details>


<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task2">Task 2</a></summary>

- Task: Create a JavaScript library that provides advanced data transformation functions. The library should include the following features:

###### addValues: 
- Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.
stringifyValue: Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.

###### invertBoolean: 
- Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error.

###### convertToNumber: 
- Accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error.

###### coerceToType: 
- Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task3">Task 3</a></summary>

#### Task 1: Immutability and Pure Functions.

###### calculateDiscountedPrice:
- Implement a pure function called calculateDiscountedPrice that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.

###### calculateTotalPrice:
- Create a pure function called calculateTotalPrice that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.

#### Task 2: Function Composition and Point-Free Style

###### getFullName:
- Implement a function called getFullName that takes a person object with firstName and lastName properties. The function should return the person's full name in the format "FirstName LastName".

###### filterUniqueWords:
- Create a function called filterUniqueWords that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.

###### getAverageGrade:
- Implement a function called getAverageGrade that takes an array of student objects, each containing a name and grades property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.

#### Task 3: Closures and Higher-Order Functions

###### createCounter:
- Create a function called createCounter that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.

###### repeatFunction:
- Implement a higher-order function called repeatFunction that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.

#### Task 4: Recursion and Tail Call Optimization

###### calculateFactorial:
- Implement a recursive function called calculateFactorial that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.

###### power:
- Create a recursive function called power that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

#### Task 5: Lazy Evaluation and Generators (*do not use yield)

###### lazyMap:
- Implement a lazy evaluation function called lazyMap that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.

###### fibonacciGenerator:
- Create a lazy generator function called fibonacciGenerator that generates Fibonacci numbers one at a time using lazy evaluation.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task4">Task 4</a></summary>

#### Task 1: Object Property Manipulation

- Create an object called `person` with the following properties and values:

firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"

- Use `property descriptors` to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.

- Implement a method called `updateInfo` on the person object that takes a new info object as an argument. The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). Ensure that this method adheres to the read-only property descriptor set earlier.

- Create a new property called `address` on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable.

#### Task 2: Object Property Enumeration and Deletion

-Create a new object called `product` with the following properties and values:

name: "Laptop"
price: 1000
quantity: 5

- Use `property descriptors` to make the price and quantity properties non-enumerable and non-writable.

- Implement a function called `getTotalPrice` that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.`getOwnPropertyDescriptor` method.

- Implement a function called `deleteNonConfigurable` that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.

#### Task 3: Object Property Getters and Setters

- Create an object called `bankAccount` with the following properties and values:
balance: 1000 (default value)

- Use a getter to define a property called `formattedBalance`, which returns the balance with a currency symbol (e.g., "$1000").

- Use a setter to define a property called `balance`, which updates the account balance and automatically updates the corresponding formattedBalance value.

- Implement a method called `transfer` on the bankAccount object that takes two bankAccount objects and an amount as arguments. The method should transfer the specified amount from the current account to the target account. Ensure that the balance and formattedBalance properties of both accounts are updated correctly.

#### Task 4: Advanced Property Descriptors

- Implement a function called `createImmutableObject` that takes an object as an argument and returns a new object with all its properties made read-only and non-writable using property descriptors. The function should handle nested objects and arrays recursively.

- Use the `createImmutableObject` function to create an immutable version of the person object from Task 1.

#### Task 5: Object Observation

- Implement a function called `observeObject` that takes an object and a callback function as arguments. The function should return a proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or modified.

- Use the `observeObject` function to create a proxy for the person object from Task 1. The callback function should log the property name and the action (get or set) performed on the object.

#### Task 6: Object Deep Cloning

- Implement a function called `deepCloneObject` that takes an object as an argument and returns a deep copy of the object. The function should handle circular references and complex nested structures. Do not use JSON methods.

#### Task 7: Object Property Validation

- Implement a function called `validateObject` that takes an object and a validation schema as arguments. The schema should define the required properties, their types, and any additional validation rules. The function should return true if the object matches the schema, and false otherwise. You can choose any schema you want.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task5">Task 5</a></summary>

#### Task 1: Advanced Array Filtering

- Create a function called `customFilterUnique` that takes an array and a callback function as arguments. The customFilterUnique function should filter the array using the callback function to determine uniqueness. The resulting array should contain only unique elements based on the callback's logic.

- Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.

#### Task 2: Array Chunking

- Create a function called `chunkArray` that takes an array and a chunk size as arguments. The chunkArray function should divide the array into smaller arrays, each containing elements of the specified chunk size. The function should return an array of arrays.

- Optimize the `chunkArray` function to minimize memory usage while chunking the array.

#### Task 3: Array Shuffling

- Create a function called `customShuffle` that takes an array as an argument and returns a new array with its elements randomly shuffled.

- Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.

#### Task 4: Array Intersection and Union

- Create a function called `getArrayIntersection` that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.

- Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.

#### Task 5: Array Performance Analysis

- Implement a function called `measureArrayPerformance` that takes a function and an array as arguments. The measureArrayPerformance function should execute the provided function with the given array as input and measure the execution time.

- Use the `measureArrayPerformance` function to compare the performance of built-in array methods (map, filter, reduce, etc.) against your custom array manipulation functions.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task6">Task 6</a></summary>

#### Task 1: Quasi-Tagged Templates

- You are working on a localization library that uses tagged templates to handle multiple languages. Implement a function called `localize` that acts as a quasi-tagged template. The function should take a template string and an object containing language-specific translations. It should replace placeholders in the template string with the corresponding translations from the provided object.

#### Task 2: Advanced Tagged Template

- Create a function called `highlightKeywords` that acts as a tagged template. The function should take a template string and an array of keywords. It should highlight each occurrence of a keyword in the template by wrapping it in a `<span>` element with a specific CSS class. Use template literals and string manipulation to achieve this.

#### Task 3: Multiline Tagged Template

- Implement a multiline tagged template function called `multiline` that takes a template string and returns a string with line numbers added at the beginning of each line. The line numbers should start from 1 and increase for each line. Preserve the original indentation of each line.

#### Task 4: Implementing Debounce Function

###### Description

- Your task is to implement a `debounce` function that takes a function and a delay time as arguments. The goal of the debounce function is to ensure that the provided function is only executed after the user stops invoking it for the specified delay time.

###### Instructions

- Implement a function called `debounce` that takes two arguments:
- `func`: The function to be debounced.
- `delay`: The delay time (in milliseconds) before the function is executed.
- The `debounce` function should return a new function that wraps the provided function.
- When the new function is invoked, it should:
- Clear any existing timeout.
- Set a new timeout to execute the provided function after the specified delay time.
- Test your `debounce` function by using it to debounce an input event listener. Ensure that the provided function is only called once after the user stops typing for the specified delay time.

#### Task 5: Implementing Throttle Function

- Your task is to implement a `throttle` function that takes a function and a time interval as arguments. The throttle function should ensure that the provided function is executed at most once within the specified time interval.

###### Instructions

- Implement a function called `throttle` that takes two arguments:
- `func`: The function to be throttled.
- `interval`: The time interval (in milliseconds) within which the function can be executed.
- The `throttle` function should return a new function that wraps the provided function.
- When the new function is invoked, it should:
- Check if the specified time interval has elapsed since the last execution of the provided function.
- If the interval has not elapsed, ignore the invocation.
- If the interval has elapsed, execute the provided function and update the last execution timestamp.
- Test your `throttle` function by using it to throttle a scroll event listener. Ensure that the provided function is executed at most once within the specified time interval during rapid scrolling.

#### Task 6: Currying Function Implementation

- Your task is to implement a `currying` function that converts a given function into a curried version. Currying is a technique in which a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.

###### Instructions

- Implement a function called `curry` that takes two arguments:
- `func`: The function to be curried.
- `arity`: The number of arguments the original function takes.
- The `curry` function should return a new curried function.
- The `curried` function should keep accepting arguments until it has received the specified number of arguments (`arity`). Once all arguments are received, the original function should be executed with the collected arguments.
- If the `curried` function is invoked with fewer arguments than `arity`, it should return a new curried function that waits for the remaining arguments.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task7">Task 7</a></summary>

#### Task 1: Implement `promiseAll` Function

- Your task is to implement a function called `promiseAll` that mimics the behavior of `Promise.all()`. The function should accept an array of promises and return a single promise that resolves to an array of resolved values or rejects with the reason of the first rejected promise.

###### Instructions

- Implement a function called `promiseAll` that takes an array of promises as an argument.
- The function should return a new promise that resolves when all promises in the input array have resolved, and rejects if any of the promises reject.
- If all promises resolve, the resolved value of the returned promise should be an array containing the resolved values of the input promises, in the same order.
- If any promise rejects, the returned promise should reject with the reason of the first rejected promise.

#### Task 2: Implement `promiseAllSettled` Function

- Your task is to implement a function called `promiseAllSettled` that mimics the behavior of `Promise.allSettled()`. The function should accept an array of promises and return a promise that resolves to an array of objects representing the settlement of each promise.

###### Instructions

- Implement a function called `promiseAllSettled` that takes an array of promises as an argument.
- The function should return a new promise that resolves with an array of objects representing the settlement of each promise in the input array.
- Each object in the resolved array should have properties `status` and `value` or `reason`. The `status` can be either `'fulfilled'` or `'rejected'`, and `value` should hold the resolved value (if fulfilled) or `reason` should hold the rejection reason (if rejected).

#### Task 3: Implement Chaining of Promises as a Separate Function

- Your task is to implement a function called `chainPromises` that facilitates chaining of promises. The function should accept an array of functions that return promises and execute them sequentially.

###### Instructions

- Implement a function called `chainPromises` that takes an array of functions as an argument.
- Each function in the array should return a promise.
- The `chainPromises` function should execute the functions sequentially, chaining the promises together.
- The returned promise should resolve with the value of the last resolved promise or reject with the reason of the first rejected promise.

###### Task 4: Implement `promisify` Function

- Your task is to implement a function called `promisify` that converts a callback-style function into a function that returns a promise.

###### Instructions

- Implement a function called `promisify` that takes a callback-style function as an argument.
- The `promisify` function should return a new function that returns a promise.
- The new function should execute the original callback-style function and resolve the promise with its result or reject the promise with any error encountered.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task8">Task 8</a></summary>

- Design and implement an object-oriented program in JavaScript to simulate the functioning of an online bookstore. This assignment will test your understanding of classes, encapsulation, inheritance, and polymorphism.

#### Part 1: Class Design

###### Book Class: 

- Create a class called `Book` to represent individual books. Each book should have properties like title, author, ISBN, price, and availability.

###### User Class: 

-Create a class called `User` to represent users of the bookstore. Users should have properties like name, email, and a unique user ID.

###### Cart Class: 

- Design a class called `Cart` to simulate a shopping cart. It should have methods to add books, remove books, and calculate the total price of the books in the cart.

###### Order Class: 

- Create an `Order` class to represent a user's order. It should include information about the user, the books ordered, and the total price.

#### Part 2: Implementation

###### Create Objects: 

- Instantiate multiple `Book` objects, representing different books available in the bookstore. Also, create a few `User` objects.

###### Add Books to Cart: 

- Simulate users adding books to their cart by creating instances of the `Cart` class and using its methods.

###### Place Orders: 

- Implement the process of placing an order. Users should be able to create instances of the `Order` class, specifying the books they want to purchase.

#### Part 3: Demonstration

###### Create a Scenario: 

- Design a scenario where users browse books, add them to their carts, and place orders. Simulate interactions between users, carts, and orders.

###### Interaction: 

- Demonstrate how objects of different classes interact with each other. For example, a user interacts with a cart, and a cart interacts with orders.

###### Polymorphism: 

- Utilize polymorphism by treating different types of books (e.g., fiction, non-fiction) uniformly when users add them to the cart.

#### Part 4: Documentation

###### Documentation: 

- Provide clear and concise comments and documentation for your code. Explain the purpose of each class, method, and property. Describe the interaction between different objects and how encapsulation is maintained.

#### Submission

- Submit your JavaScript program along with detailed documentation and comments that explain your code. Ensure that your code is well-structured and adheres to best practices in object-oriented programming.

</details>

