// Specification:
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red.It should be gray when there is money in the account

var savingsNum = document.querySelector('.savings-input')
var checkingsNum = document.querySelector('.checkings-input')
var savingsBalanceDisplay = document.querySelector('.savings-balance')
var checkingsBalanceDisplay = document.querySelector('.checkings-balance')
var savingsDepositBtn = document.querySelector('.savings-deposit-btn')
var savingsWithdrawBtn = document.querySelector('.savings-withdraw-btn')
var checkingsDepositBtn = document.querySelector('.checkings-deposit-btn')
var checkingsWithdrawBtn = document.querySelector('.checkings-withdraw-btn')

// track balances

var savingsBalance = 0
var checkingsBalance = 0

// new function, one per account rather than for each action

function withdraw(account) {
  if (account === 'savings') {
    if (Number(savingsNum.value) > Number(savingsBalance)) {
      return
    } else {
      savingsBalance = savingsBalance - Number(savingsNum.value)
    }
  } else if (account === 'checkings') {
    if (Number(checkingsNum.value) > Number(checkingsBalance)) {
      return
    } else {
      checkingsBalance = checkingsBalance - Number(checkingsNum.value)
    }
  }
  balanceUpdate()
}
function deposit(account) {
  if (account === 'savings'){
      savingsBalance = Number(savingsNum.value) + savingsBalance
    } else if (account === 'checkings'){
      checkingsBalance = Number(checkingsNum.value) + checkingsBalance
    }
  balanceUpdate()
}

// presentation

function balanceUpdate() {
  savingsBalanceDisplay.textContent = ('$' + savingsBalance.toFixed(2))
  checkingsBalanceDisplay.textContent = ('$' + checkingsBalance.toFixed(2))
  if (savingsBalance === 0){
    document.querySelector('.savings-account').style.backgroundColor = '#963484'
  } else {
    document.querySelector('.savings-account').style.backgroundColor = '#28C2FF'
  }
  if (checkingsBalance === 0){
    document.querySelector('.checkings-account').style.backgroundColor = '#963484'
  } else {
    document.querySelector('.checkings-account').style.backgroundColor = '#60AFFF'
   
  }
}

// button event listeners

savingsDepositBtn.addEventListener('click', function () {
  deposit('savings')
})
savingsWithdrawBtn.addEventListener('click', function () {
  withdraw('savings')
})
checkingsDepositBtn.addEventListener('click', function () {
  deposit('checkings')
})
checkingsWithdrawBtn.addEventListener('click', function () {
  withdraw('checkings')
})

