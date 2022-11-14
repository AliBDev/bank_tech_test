const Account = require('../lib/account.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
  })

  test('Should start with an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  });

  test('Should show a balance of 100 after 100 has been deposited', () => {
    account.add(100);

    expect(account.balance).toEqual(100)
  });
  
})