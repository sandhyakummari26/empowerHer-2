// Question 1: Closure-Based Counter Implementation
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Current count: ${count}`);
    }
  };
}
// Each call to createCounter() creates an isolated closure for count.
// Example:
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

// Question 2: Simulating Private Variables with Closures
function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];
  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push({ type: "deposit", amount });
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        transactionHistory.push({ type: "withdraw", amount });
        console.log(`Withdrawn: ${amount}`);
      } else {
        transactionHistory.push({ type: "withdraw-failed", amount });
        console.log("Insufficient balance");
      }
    },
    getBalance: function() {
      console.log(`Current balance: ${balance}`);
    },
    getTransactionHistory: function() {
      return transactionHistory;
    }
  };
}
// Example:
const account = createBankAccount();
account.deposit(500);      
account.withdraw(200);    
account.withdraw(400);     
account.getBalance();      
console.log(account.transactionHistory); 
console.log(account.getTransactionHistory()); 