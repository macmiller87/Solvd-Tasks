import { book1, book2, book3, booksInMemoryDatabase } from "./Book.js";
import { user1, user2, usersInMemoryDatabase } from "./User.js";

class Cart {

    constructor(user) {
        this._user = user;
    }

    addBook(bookTitle, userName) {

        const isValidUser = usersInMemoryDatabase.find((user) => user.name === userName);
        const isValidBook = booksInMemoryDatabase.find((book) => book.title === bookTitle);

        const checkBookAvailability = isValidBook.title === bookTitle && isValidBook.amount >= 1 && isValidBook.availability === true ? true : false;

        if(!isValidUser) {
            console.error("The user isn't a valid user !");

        }else if(!isValidBook) {
            console.error("The book isn't a valid book !");

        }else if(checkBookAvailability === false) {
            console.error("The book isn't available !");

        }else {
            
            const defaultAmountAtTimeToAddToCart = 1;

            const filterBookObjectResp = {
                title: isValidBook.title, 
                author: isValidBook.author,
                price: isValidBook.price,
                amount: defaultAmountAtTimeToAddToCart
            }

            isValidUser.userBooksCart.push(filterBookObjectResp);
            isValidBook.amount--;

            if(isValidBook.amount < 1) {
                isValidBook.availability = false;
            }
        }

    }

    removeBooks(bookTitle, userName) {

        const isValidUser = usersInMemoryDatabase.find((user) => user.name === userName);

        const checkUserBooksCart = isValidUser.userBooksCart.findIndex((book) => book.title === bookTitle);

        if(!isValidUser) {
            console.error("The user isn't a valid user !");

        }else if(checkUserBooksCart === -1) {
            console.error("The book dosen't exists in the books cart of the user !");

        }else {

            isValidUser.userBooksCart.splice(checkUserBooksCart, 1);

            const isValidBook = booksInMemoryDatabase.find((book) => book.title === bookTitle);

            isValidBook.amount++;

            if(isValidBook.amount >= 1) {
                isValidBook.availability = true;
            }
        }

    }

    totalPrice(userName) {

        const isValidUser = usersInMemoryDatabase.find((user) => user.name === userName);

        if(!isValidUser) {
            console.error("The user isn't a valid user !");
        }

        let qtityBookInUserCart = isValidUser.userBooksCart.length;
        let getAndSumPrices = 0;

        while(qtityBookInUserCart > 0) {

            isValidUser.userBooksCart.find((prices) => {
                getAndSumPrices += prices.price;
                qtityBookInUserCart--;
            });
        }

        const getTotalPriceOfBooksInUserCart = getAndSumPrices.toFixed(2);

        return getTotalPriceOfBooksInUserCart;
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }
}

export { Cart };

