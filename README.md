#### Repository With Tasks From Solvd's NodeJs Course

#### Tasks Description

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

- Create a class called `User` to represent users of the bookstore. Users should have properties like name, email, and a unique user ID.

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

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task9">Task 9</a></summary>

#### Task

- Demonstrate your knowledge of data structures (stack, queue, tree, graph, linked list) and implement algorithms to solve specific problems related to these data structures in JavaScript.

###### Part 1: Data Structure Implementations

- `Stack`: Implement a class for a stack data structure. Include methods for push, pop, and peek.

- `Queue`: Implement a class for a queue data structure. Include methods for enqueue, dequeue, and peek.

- `Binary Tree`: Implement a class for a binary tree data structure. Include methods for inserting nodes, searching for a node, and traversing the tree (e.g., in-order, pre-order, post-order).

- `Graph`: Implement a class for a graph data structure. Include methods for adding vertices and edges, performing depth-first search (DFS), and breadth-first search (BFS).

- `Linked List`: Implement a class for a singly linked list data structure. Include methods for inserting nodes, deleting nodes, and searching for a node.

###### Part 2: Algorithmic Problems

- `Min/Max Stack`: Implement a class for a stack that supports finding the minimum and maximum elements in constant time (O(1)). Include methods for push, pop, getMin, and getMax.

- `Binary Search Tree`: Implement a function to determine if a binary tree is a binary search tree (BST). Provide an efficient algorithm that checks whether the tree satisfies the BST property.

- `Graph Algorithms`: Implement algorithms to find the shortest path between two vertices in a graph using both Dijkstra's algorithm and Breadth-First Search (BFS).

- `Linked List Cycle`: Implement a function to detect if a linked list has a cycle. Use Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm) to solve this problem efficiently.

###### Part 3: Demonstration

- `Usage Demonstration`: Create instances of your data structures and demonstrate their usage with sample data. Show how the algorithms you implemented can solve practical problems using these data structures.

###### Part 4: Documentation

- `Documentation`: Provide clear and concise comments and documentation for your code. Explain the purpose of each data structure, method, and algorithm. Describe how the algorithms work and their time complexity.

###### Submission

- Submit your JavaScript code along with detailed documentation and comments that explain your data structure implementations and algorithms. Ensure that your code is well-structured and adheres to best practices in data structures and algorithms.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task10">Task 10</a></summary>

#### Task

- Explore the concepts of hash functions and hash tables, and to implement a hash table with a custom hash function in JavaScript. This assignment will test your understanding of hash functions, collision resolution, and the practical application of hash tables.

#### Part 1: Understanding Hash Functions

###### Research: 

- Begin by researching and understanding what hash functions are, how they work, and their applications in computer science and data storage.

#### Part 2: Implementing a Custom Hash Function

###### Custom Hash Function: 

- Implement a custom hash function in JavaScript. Your hash function should take a string as input and produce a hash code (an integer) as output. Be creative, but ensure that your function distributes values uniformly.

###### Collision Handling: 

- Implement a collision resolution strategy. You can choose from methods like separate chaining (using linked lists), open addressing (linear probing, quadratic probing), or any other technique you prefer.

#### Part 3: Building a Hash Table

###### Hash Table Class: 

- Create a JavaScript class for a hash table that uses your custom hash function. Include methods for inserting key-value pairs, retrieving values by key, and deleting key-value pairs.

###### Testing: 

- Create test cases to ensure that your hash table and custom hash function work correctly. Test scenarios should include inserting, retrieving, and deleting values, as well as handling collisions gracefully.

#### Part 4: Documentation and Analysis

###### Documentation: 

- Provide clear and concise comments and documentation for your code. Explain how your custom hash function and hash table class work.

#### Analysis: 

- Write a brief analysis of the performance of your custom hash function and hash table. Discuss the time complexity of key operations (insertion, retrieval, deletion) and any trade-offs you made in your implementation.

#### Submission

- Submit your JavaScript code for the custom hash function and hash table along with your documentation and analysis. Include test cases that demonstrate the correctness and efficiency of your implementation.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Tasks/tree/master/Task11">Task 11</a></summary>

#### Task

- Implement a simplified version of the `JSON.parse` function in JavaScript using regular expressions. This assignment will test your understanding of JSON syntax and your ability to use regular expressions for pattern matching.

#### Part 1: JSON Syntax Understanding

###### JSON Syntax: 

- Begin by revisiting the JSON (JavaScript Object Notation) syntax. Make sure you understand the basic structure of JSON objects, arrays, strings, numbers, booleans, and null values.

###### Parsing Rules: 

- Familiarize yourself with the rules for parsing JSON, including how to handle nested objects and arrays.

#### Part 2: JSON Parser Implementation

###### Implement JSON.parse: 

- Create a JavaScript function called `myJSONParse` that takes a JSON-formatted string as input and returns the corresponding JavaScript object. You should use regular expressions to tokenize and parse the input string.

###### Tokenization: 

- Implement tokenization by using regular expressions to identify JSON elements (objects, arrays, strings, numbers, booleans, null, etc.) in the input string.

###### Parsing: 

- Implement a parsing algorithm that processes the tokens generated in the previous step and constructs the corresponding JavaScript object.

###### Error Handling: 

- Ensure your implementation handles common JSON syntax errors gracefully and provides informative error messages when parsing fails.

###### Testing: 

- Test your `myJSONParse` function with various JSON strings to ensure it can correctly parse them into JavaScript objects.

#### Part 3: Documentation and Reflection

###### Documentation: 

- Provide clear comments and documentation in your code to explain how your `myJSONParse` function works and how you used regular expressions.

###### Reflect: 

- Write a brief reflection on your experience implementing a JSON parser with regular expressions. Discuss any challenges you encountered and how you addressed them.

#### Submission

- Submit your JavaScript code for the `myJSONParse` function, along with any test cases you used to validate its correctness. Include the documentation and reflection as well.

</details>

<details>
    <summary><a href="https://github.com/macmiller87/Solvd-Employee-Leave-Management">Personal Project</a></summary>

#### Employee Leave Management

###### Project Description: 

- Create an employee leave management system for a company. When an employee requests vacation days, the system calculates the number of days available and the corresponding payout, if applicable.

</details>

<details>
    <summary><a href="https://github.com/Megas-MDN/alias-game">Group Project</a></summary>

#### Node.js-Based Game "Alias" with Chat and Word Checking

###### Project Description: 

###### Overview

- This document outlines the Alias game, a multiplayer game built with Node.js. It includes chat functionality and a feature to check for similar words.

###### Game Description

- Alias is a word-guessing game where players form teams. Each team takes turns where one member describes a word and others guess it. The game includes a chat for players to communicate and a system to check for similar words.

###### Objective
- Teams try to guess as many words as possible from their teammates' descriptions.

###### Turns
- Each turn is timed. Describers cannot use the word or its derivatives.

###### Scoring
- Points are awarded for each correct guess. Similar words are checked for validation.

###### End Game
- The game concludes after a predetermined number of rounds, with the highest-scoring team winning.

###### System Requirements
- **Backend**: Node.js
- **Database**: MongoDB

###### Setup and Installation
- Details on installing Node.js, setting up the database, cloning the repository, and installing dependencies.

###### Architecture
- Outline of the server setup, API endpoints, and database schema.

###### Core Modules
1. **User Authentication**
   - Login and registration
   - Session management
2. **Game Lobby**
   - Room creation and joining
   - Team selection
3. **Game Mechanics**
   - Word generation
   - Turn management
4. **Chat System**
   - Real-time messaging
   - Chat history
5. **Word Checking**
   - Similarity algorithm
   - Word validation

###### APIs
- Documentation for each API endpoint including authentication, game control, and chat functionalities.

## Database Schema
- **User Model**: Username, password, stats.
- **Game Model**: Players, scores, words.
- **Chat Model**: Messages, timestamps, users.

###### Security
- Overview of implemented security measures.

###### Testing
- Guide on unit and integration testing.

###### Deployment
- Instructions for deploying the application.

###### Future Enhancements
- Suggestions for additional features or improvements.

- You will have three weeks for this task.

</details>