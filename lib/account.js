const Formatter = require('../lib/formatter')
const formatter = new Formatter()
class Account {
  constructor() {
    const STARTING_BALANCE = 0;

    this.balance = STARTING_BALANCE;
    this.formatter = new Formatter();
  }

  deposit (amount) {
    this.balance += amount
  }

  withdrawal (amount) {
    if (amount > this.balance) return "Insufficient funds available.";
    this.balance -= amount
  }

  getCurrentBalance() {
    return this.formatter.convertAmountToCurrency(this.balance);
  }
}

module.exports = Account;