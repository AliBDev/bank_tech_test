class Formatter {
  todaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  convertAmountToCurrency(amount) {
    return amount.toFixed(2)
  }

  statementColumns(transaction) {
    const transactionAmount = this.convertAmountToCurrency(
      transaction.amount
    );

    if (transaction.type == "deposit") return ` ${transactionAmount} || `;
    return ` || ${transactionAmount} `;
  }
}

module.exports = Formatter;
