Bank Tech Test Class Design Recipe
1. Describe the Problem

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  ||  debit   || balance
14/01/2023 ||         ||  500.00  || 2500.00
13/01/2023 || 2000.00 ||          || 3000.00
10/01/2023 || 1000.00 ||          || 1000.00
```


2. Design the Class Interface

class Account{
  const starting_balance = 0;
};


3. Create Examples as Tests
Make a list of examples of how the class will behave in different situations.

# EXAMPLE

# 1
account = new Account()
account.balance
account.balance # => 0


4. Implement the Behaviour
After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour.