
const BankAccount = require('../BankAccount.js')


test("Account can have different types", () => {
  let bankAccount = new BankAccount("account-type")
  expect( bankAccount.accountType() ).toBe("account-type")
})

test("Account Balance should start at 0", () => {
  let bankAccount = new BankAccount()
  expect( bankAccount.getBalance() ).toBe(0)
})

test("Can withdraw from account", () => {
  let bankAccount = new BankAccount('Savings', 10)
  bankAccount.withdraw(5)
  expect( bankAccount.getBalance() ).toBe(5)
})

test("can deposit into an account", () => {
  let bankAccount = new BankAccount('Savings', 10)
  bankAccount.deposit(5)
  expect( bankAccount.getBalance() ).toBe(15)
})

test("can console log your balance", () => {
  let bankAccount = new BankAccount('Savings', 10)
  expect(bankAccount.showBalance()).toBe(10)
})

test("can see a single log on the transaction history", () => {
  let bankAccount = new BankAccount('Savings', 10)
  bankAccount.withdraw(5)
  expect(bankAccount.transactionHistory).toBe("Balance 10, Withdraw 5 >>> New Balance 5\n")
})

test("can see a multiple logs on the transaction history", () => {
  let bankAccount = new BankAccount('Savings', 10)
  bankAccount.withdraw(5)
  bankAccount.withdraw(5)
  expect(bankAccount.transactionHistory).toBe("Balance 10, Withdraw 5 >>> New Balance 5\nBalance 5, Withdraw 5 >>> New Balance 0\n")
})




