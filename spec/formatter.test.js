const Formatter = require('../lib/formatter.js');

describe('Formatter', () => {
  formatter = new Formatter

  test("Return today's date", () => {
    expect(formatter.todaysDate()).toEqual("15/11/2022")
  });
  
})