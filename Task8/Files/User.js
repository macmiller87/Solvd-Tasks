class User {

    constructor(userId, name, email, userBooksCart) {

        userId = setId.next().value;
        userBooksCart = [];

        this._userId = userId;
        this._name = name;
        this._email = email;
        this.userBooksCart = userBooksCart;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

function* generateId() {

    let id = 1;

    while(true) {
        yield id++;
    }
}

const setId = generateId();

const usersInMemoryDatabase = [];


// Registering users and check conditions
export const user1 = new User();

user1.name = "Macmiller"
user1.email = "someMail@gmail.com"

export const user2 = new User();

user2.name = "Martin Olson"
user2.email = "maolson@gmail.com"

export const user3 = new User();

user3.name = "Callie Harvey"
user3.email = "cllharvey@gmail.com"

export const user4 = new User();

user4.name = "Ian Wong"
user4.email = "inwong@gmail.com"

const findUser1 = usersInMemoryDatabase.find((user) => user.name === user1.name);

if(!findUser1) {
    usersInMemoryDatabase.push(user1);

}else {
    console.error("User already exists !");
}

const findUser2 = usersInMemoryDatabase.find((user) => user.name === user2.name);

if(!findUser2) {
    usersInMemoryDatabase.push(user2);
}else {
    console.error("User already exists !");
}

const findUser3 = usersInMemoryDatabase.find((user) => user.name === user3.name);

if(!findUser3) {
    usersInMemoryDatabase.push(user3);
}else {
    console.error("User already exists !");
}

const findUser4 = usersInMemoryDatabase.find((user) => user.name === user4.name);

if(!findUser4) {
    usersInMemoryDatabase.push(user4);
}else {
    console.error("User already exists !");
}

export { User, usersInMemoryDatabase };