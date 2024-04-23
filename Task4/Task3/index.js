const bankAccount = {
    balance: 1000,
   
    get formattedBalance() {
        this.balance = "$" + this.balance;
        this._formattedBalance = this.balance;
        return this._formattedBalance;
    },

    set _balance(balance) {
        this.balance = balance;
        this._formattedBalance = this.balance;
    },

    transfer(account, valueToTransfer) {

        const getAccountBalance = this.balance;

        if(getAccountBalance < valueToTransfer) {
            throw new Error("The account dosen't' have enought money !");
        }

        const creditAccountBalance = account.balance + valueToTransfer;
        const debitAccountBalance = this.balance - valueToTransfer;

        account.balance = creditAccountBalance;
        this.balance = debitAccountBalance;
    }

};

const account1 = Object.create(bankAccount);
const account2 = Object.create(bankAccount);

const fromAccount = account1;
const toAccount = account2;

fromAccount.transfer(toAccount, ); // Add the number valueToTransfer

console.log("The balance of account1 is: " + account1.formattedBalance);
console.log("The balance of account2 is: " + account2.formattedBalance);
