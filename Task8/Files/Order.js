import { user1, user2, usersInMemoryDatabase } from "./User.js";
import { book1, book2, book3, booksInMemoryDatabase } from "./Book.js";
import { Cart } from "./Cart.js";

class Order {

    constructor(user, books) {
        this._user = user;
        this._books = books;
    }

    userPlacingOrder(userName, bookTitles) {

        const isValidUser = usersInMemoryDatabase.find((user) => user.name === userName);

        if(!isValidUser) {
            console.error("The user isn't a valid user !");
        }

        let index = 0;
        let count = 0;

        while(index < bookTitles.length) {

            isValidUser.userBooksCart.find((book) => {

                if(book.title === bookTitles[index]) {
                    count++;
                    index++;

                }else {
                    index++;
                }
            });
        }

        if(isValidUser.userBooksCart.length === count) {

            const cart = new Cart(isValidUser);
            const getTotalPrices = cart.totalPrice(isValidUser.name);

            console.log(`\n Total order price for ${ isValidUser.name }'s order is $${ getTotalPrices } .... order placed with sucess !`);

        }else {
            console.log(`\n The books in the ${ isValidUser.name } cart isn't the same of the ${ isValidUser.name }'s order, please check !`);
        }
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }

    get books() {
        return this._books;
    }

    set books(books) {
        this._books = books;
    }
}

export { Order };


// Adding and removing books to users Cart
const userCart1 = new Cart(user1);
const userCart2 = new Cart(user2);

userCart1.addBook(book1.title, user1.name);
userCart1.addBook(book2.title, user1.name);

//userCart1.removeBooks(book1.title, user1.name) // For tests ...for remove a book from user cart, plese uncomment this line.
//userCart1.removeBooks(book2.title, user1.name); // For tests ...for remove a book from user cart, plese uncomment this line.

userCart2.addBook(book1.title, user2.name);
userCart2.addBook(book3.title, user2.name);

//userCart2.removeBooks(book1.title, user2.name); // For tests .... for remove a book from user cart, plese uncomment this line.





// Placing Orders
const user1BookTitles = [book1.title, book2.title];
const user1Order = new Order(user1, user1BookTitles);
user1Order.userPlacingOrder(user1.name, user1BookTitles);

const user2BookTitles = [book1.title, book3.title];
const user2Order = new Order(user2, user2BookTitles);
user2Order.userPlacingOrder(user2.name, user2BookTitles);


// Example of results
console.log("-----------------------------------------------------------------------------------");
console.log();
console.log(user1);
console.log("----------------------------------------------");
console.log(user2);
console.log("----------------------------------------------");
console.log();

// Vision of users usersInMemoryDatabase
console.log("usersInMemoryDatabase", usersInMemoryDatabase);
console.log("----------------------------------------------");
console.log();

// Vision of books in booksInMemoryDatabase
console.log("booksInMemoryDatabase", booksInMemoryDatabase);
console.log();

