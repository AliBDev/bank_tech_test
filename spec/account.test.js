const Account = require('../lib/account.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
  })

  it('Should start with an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  });

  it('Should show a balance of 100 after 100 has been deposited', () => {
    account.deposit(1000);

    expect(account.balance).toEqual(1000)
  });

  it('Should allow for withdrawals', () => {
    account.deposit(1000);
    account.withdrawal(500);
    
    expect(account.balance).toEqual(500)
  });
  
  it('Should display the current balance', () => {
    account.deposit(1000);
    account.withdrawal(500);
    
    expect(account.getCurrentBalance()).toEqual("500.00")
  });
})