'use strict'

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance() {
    //sum up the amounts in transactions array
    //loop through array and add values
    let currentBalance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      currentBalance += this.transactions[i].amount;
    }
    //return the current balance
    return currentBalance;
  }

  deposit(amt) {
    //create new transaction
    let newDeposit = new Transaction(amt);
    // console.log(newDeposit);
    
    //add it to transactions array
    if (amt >= 0) {
      this.transactions.push(newDeposit);
    } else {
      //cannot deposit a negative amount
      console.log("Not a valid deposit");
    }
  }

  charge(payee, amt) {
    //creates a new transaction
    //adds the transaction to the transactions array
    let newAmount = this.balance() - amt;
    // console.log(this.balance());
    // console.log(amt);
    // console.log(newAmount);
    if (newAmount >= 0) {
      newAmount = newAmount - this.balance();
      // console.log(newAmount);
      let newCharge = new Transaction(newAmount, payee)
      // console.log(newCharge);
      this.transactions.push(newCharge);
    } else {
      console.log("You do not have sufficient funds");
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }

  
}

// TESTS

let acct1 = new BankAccount("5553429", "John Doe");


console.log(acct1.accountNumber);  // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.balance()); // 0

acct1.deposit(100);
console.log(acct1.balance()); // 100

acct1.deposit(-200);  // should not be allowed
console.log(acct1.balance()); // 100

acct1.charge("Target", 30.50)
acct1.charge("FreeBirds", 15.15)
console.log(acct1.balance())  //54.35

acct1.charge("Diamond Shop", 1000) // should not be allowed
console.log(acct1.balance())  //54.35

acct1.charge("Target", -20) //refund
console.log(acct1.balance())  //74.35


console.log(acct1.transactions);




