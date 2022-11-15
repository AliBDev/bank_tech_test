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
});