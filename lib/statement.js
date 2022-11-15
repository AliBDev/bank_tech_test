const Formatter = require("../lib/formatter");

class Statement {
  constructor(balance) {
    this.statement = [];
    this.formatter = new Formatter();
    this.balance = balance;
  }

  getStatement() {
    return this.statement;
  }

  getHeader() {
    return "Date || Credit || Debit || Balance";
  }

  add(transaction) {
    let date = this.formatter.todaysDate();
    let statementColumns = this.formatter.statementColumns(transaction);
    let balance = this.balance.getCurrentBalance();

    this.statement.push(`${date} ||${statementColumns}|| ${balance}`);
  }
}

module.exports = Statement;