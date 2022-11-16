const Account = require("../lib/account");
const Statement = require("../lib/statement");
class bankingApp {
  constructor() {
    this.account = new Account();
    this.statement = new Statement(this.account);
  }

  deposit(amount) {
    const deposit = parseFloat(amount);

    const transaction = {
      amount: deposit,
      type: "deposit",
    };

    this.account.deposit(deposit);
    this.statement.add(transaction);
  }

  getStatement() {
    return this.statement.getStatement();
  }

  withdrawal(amount) {
    const withdrawal = parseFloat(amount);

    let transaction = {
      amount: withdrawal,
      type: "withdrawal",
    };

    this.account.withdrawal(withdrawal);
    this.statement.add(transaction);
  }
}

module.exports = bankingApp;