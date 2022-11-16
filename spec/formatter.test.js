const Formatter = require('../lib/formatter.js');
const formatter = new Formatter();

jest.useFakeTimers().setSystemTime(new Date("2022-11-15"));

describe('Date Formatter', () => {
  it("Returns today's date", () => {
    expect(formatter.todaysDate()).toEqual("15/11/2022");
  });
})

describe('Currency Formatter', () => {
  it('Returns the amount formatted with 2 decimal places: 100.00', () => {  
    expect(formatter.convertAmountToCurrency(100)).toEqual("100.00");
  });
})

describe('Columns Formatter', () => {
  it('Returns the formatting of a deposit', () => {
    transaction = { amount: 500, type: "deposit" };
    
    expect(formatter.statementColumns(transaction)).toEqual(" 500.00 || ");
  });

  it('Returns the formatting of a withdrawal', () => {  
    transaction = { amount: 400, type: "withdrawal" };
    
    expect(formatter.statementColumns(transaction)).toEqual(" || 400.00 ");
  });
})