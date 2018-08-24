

class BankAccount {

  constructor(type = 'Savings', balance = 0) {
    this.type = type
    this.balance = balance
    this.transactionHistory = ''
  }

  accountType() {
    return this.type
  }

  getBalance() {
    return this.balance
  }

  withdraw(num) {
    this.transactionHistory += `Balance ${this.balance}, Withdraw ${num} >>> New Balance ${this.balance - num}\n`
    return this.balance -= num
  }

  deposit(num) {
    this.transactionHistory += `Balance ${this.balance}, Deposit ${num} >>> New Balance ${this.balance + num}\n`
    return this.balance += num
  }

  showBalance() {
    return this.balance
  }
}



module.exports = BankAccount
