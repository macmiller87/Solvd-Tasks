#### Documentation of BookStore Task8

###### Main goal of this application

- This application have as main goal, register users and books, for users to be can possible to buy books in the bookstore trought their carts and placing your orders and getting the price of their orders, based on books prices.

###### Structure and Goal of the Classes

- Class `User`, this class have a structure for it's possible to create a user, wiht properties `userId`, `name`, `email` and `userBooksCart`.

- Class `Book`, this class have a structure for it's possible to create a book, with properties `title`, `author`, `price`, `amount`, and `availability`.

- Class `Cart`, this class have a structure and methods for it's possible to `addBooks`, `removeBooks`, and get `totalPrice` of the user books, based on `user` class;

- Class `Order`, this class have a structure and a method `userPlacingOrder`, for it's possible to user, placing an order in the bookstore, based on `user` and `books` class; 

###### InMemoryDatabases

- The class `User`, had a const `usersInMemoryDatabase`, for to be possible to registering users on bookstore;

- The class `Book`, had a const `booksInMemoryDatabase`, for to be possible to registering books available on bookstore;

###### Functional structure .... examples already existing in classes

- In class `User`, already have some users Registered, for examples, but it's possible to create how many users do you want, whit a single criteria, the name of the users (must to be unic), for checking this, exist some checks in the code.

- In class `book`, already have some books Registered, for examples, but it's possible to create how many books do you want, whit a single criteria, the name of the books (must to be unic), for checking this, exist some checks in the code.

- Class `Order`, is the main class, when we talked about run the application, in this class users can adding and remove `books` to their carts, and also placing their `orders`, and check in the terminal the results.

- The class `Order` already have some examples, for running the application, but you can add or remove examples that you want, based on features described above, and in the examples already existing in this class.

###### Configuration file of the application

- This application dosen't deppends of external libs, but was created a file `package.json`, for to be possible use the resource os javascript `type module`, for resolve point about `import and export` of the files, and also to runing some scripts in terminal and debuging the application.

###### For runing this application

- 1. Clone this application.

- 2. Go to folder `Task8`, and with `node` instaled and some package manager, kind npm, yarn etc .... exec one of the next scripts, based on previous instructions.

- `yarn dev` or `npm dev` to run the application, or simply `node Files/Order.js`, in terminal.