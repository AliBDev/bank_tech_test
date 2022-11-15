const Formatter = require("../lib/formatter");

class Statement {
  constructor(balance) {
    this.statement = [];
    this.formatter = new Formatter();
    this.balance = balance;
  }

  get() {
    return this.statement;
  }

  getHeader() {
    return "Date || Credit || Debit || Balance";
  }
  add(transaction) {
    let date = this.format.todaysDate();
    let balance = this.balance.getCurrentBalance();
    let statementColumns = this.format.statementColumns(transaction);

    this.statement.push(`${date} ||${statementColumns}|| ${balance}`);
  }
}

module.exports = Statement;