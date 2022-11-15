const Formatter = require('../lib/formatter.js');

describe('Formatter', () => {
 const formatter = new Formatter()

  test("Return today's date", () => {
    expect(formatter.todaysDate()).toEqual("15/11/2022")
  });
})

describe('Formatter', () => {
 const formatter = new Formatter()

  test('Return the amount formatted with 2 decimal places: 100.00', () => {  
    expect(formatter.convertAmountToCurrency(100)).toEqual("100.00")
  });
})