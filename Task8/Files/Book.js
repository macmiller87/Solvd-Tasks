class Book {
   
    constructor(title, author, price, amount, availability) {

        availability = true;

        this._title = title;
        this._author = author;
        this._price = price;
        this._amount = amount;
        this._availability = availability;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }

    get availability() {
        return this._availability;
    }

    set availability(availability) {
        this._availability = availability;
    }
}

const booksInMemoryDatabase = [];


// Registering books and check conditions
export const book1 = new Book();

book1.title = "Matrix",
book1.author = "Lilly Wachowski",
book1.price = 80;
book1.amount = 4;

export const book2 = new Book();

book2.title = "Mortal Kombat",
book2.author = "Ed Boon",
book2.price = 100;
book2.amount = 4;

export const book3 = new Book();

book3.title = "Street Figther",
book3.author = "Takashi Nishiyama",
book3.price = 60;
book3.amount = 4;

export const book4 = new Book();

book4.title = "Prison Break",
book4.author = "Paul Scheuring",
book4.price = 100;
book4.amount = 4;

const findBook1 = booksInMemoryDatabase.find((book) => book.title === book1.title);

if(!findBook1) {
    booksInMemoryDatabase.push(book1);
}else {
    console.error("Book already exists !");
}

const findBook2 = booksInMemoryDatabase.find((book) => book.title === book2.title);

if(!findBook2) {
    booksInMemoryDatabase.push(book2);
}else {
    console.error("Book already exists !");
}

const findBook3 = booksInMemoryDatabase.find((book) => book.title === book3.title);

if(!findBook3) {
    booksInMemoryDatabase.push(book3);
}else {
    console.error("Book already exists !");
}

const findBook4 = booksInMemoryDatabase.find((book) => book.title === book4.title);

if(!findBook4) {
    booksInMemoryDatabase.push(book4);
}else {
    console.error("Book already exists !");
}

export { Book, booksInMemoryDatabase };


