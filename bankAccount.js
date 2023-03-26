const accounts = [];

class Account {
  constructor(name = "", balance = 0, accountNumber) {
    this.name = name;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }
  static createAccount(name, balance) {
    const accountNumber = Math.round(Math.random() * 999999 + 100000);
    const newAccount = { name, balance, accountNumber };
    accounts.push(newAccount);
    console.log(
      "New account was created with the names of",
      `"${newAccount.name}"`,
      "and account number",
      `"${newAccount.accountNumber}".\n`
    );
    return newAccount;
  }

  static deposit(accountNumber, balance) {
    const userAccount = this.userAccount(accountNumber);
    if (balance <= 0 || !balance) return "Balance should be greater than 0.\n";
    if (!userAccount) return "Please provide a valid account.\n";
    userAccount.balance += balance;
    return `Amount deposited.\nYour new balance is ${userAccount.balance}\n`;
  }

  static withdraw(accountNumber, balance) {
    const userAccount = this.userAccount(accountNumber);
    if (balance <= 0 || !balance) return "Balance should be greater than 0.\n";
    if (!userAccount) return "Please provide a valid account.\n";
    userAccount.balance -= balance;
    return `Amount withdrawn.\nYour new balance is ${userAccount.balance}\n`;
  }

  static accountBalance(accountNumber) {
    const userAccount = this.userAccount(accountNumber);
    if (!userAccount) return "Please provide a valid account.\n";
    return `Your balance is ${userAccount.balance}.\n`;
  }

  // get account details
  static userAccount(accountNumber) {
    return accounts.find((account) => account.accountNumber === accountNumber);
  }
}

// creating user accounts
const account1 = Account.createAccount("John Doe", 650000);
const account2 = Account.createAccount("Jane", 141000);
const account3 = Account.createAccount("Bon Samuel", 432000);

console.log(accounts);
console.log(Account.accountBalance(account1.accountNumber));
// deposit on the user account
console.log(Account.deposit(account1.accountNumber, 34000));
// withdraw on the user account
console.log(Account.withdraw(account2.accountNumber, 29000));
// Check account balance
console.log(Account.accountBalance(account3.accountNumber, 29000));
// Print all accounts
console.log(accounts);
