const Statement = require('../lib/statement.js');
const Account = require('../lib/account.js')

const account = new Account();
const statement = new Statement(account);


describe('Statement', () => {
  it('displays the headers of a statement', () => {
    expect(statement.getHeader()).toEqual("Date || Credit || Debit || Balance")
  })
});