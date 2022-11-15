const Statement = require('../lib/statement.js');
const Account = require('../lib/account.js')

const account = new Account();
const statement = new Statement(account);


describe('Statement', () => {
  it('returns the headers of a statement', () => {
    expect(statement.getHeader()).toEqual("Date || Credit || Debit || Balance");
  })

  it('returns a statement with no transactions', () => {
    expect(statement.getStatement()).toEqual([]);
  })

  it("Adds a deposit to the statement", () => {
    const deposit = { amount: 1500, type: "deposit" };
    statement.add(deposit);

    const statementDetails = statement.getStatement();
    expect(statementDetails[0].includes("1500.00")).toBe(true);
  });

  it("Adds a deposit and balance is updated", () => {
    const account = new Account();
    account.deposit(2000);
    const statement = new Statement(account);

    const deposit = { amount: 2000, type: "deposit" };
    statement.add(deposit);

    const statementDetails = statement.getStatement();
    expect(statementDetails[0]).toEqual("15/11/2022 || 2000.00 || || 2000.00")
  });
});