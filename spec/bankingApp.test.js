const bankingApp = require('../lib/bankingApp.js')

jest.useFakeTimers().setSystemTime(new Date("2022-11-15"));

describe("getStatement()", () => {
  let bank = new bankingApp();

  it("returns the correct statement after a deposit of 1000", () => {
    let statement = bank.getStatement();
    bank.deposit(1000);

    let expectedTransactionRow = "15/11/2022 || 1000.00 || || 1000.00";
    expect(statement[0]).toEqual(expectedTransactionRow);
    expect(statement.includes(expectedTransactionRow)).toBe(true);
  });

  it("returns the correct statement after a withdrawal of 300", () => {
    let statement = bank.getStatement();
    bank.withdrawal(300);

    let expectedTransactionRow = "15/11/2022 || || 300.00 || 700.00";
    expect(statement.includes(expectedTransactionRow)).toBe(true);
  });
});