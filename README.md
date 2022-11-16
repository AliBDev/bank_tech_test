# Banking App

## App Description

This app has been designed as a basic way of tracking deposits & withdrawals from an account.

## Using this program

First, start with installing Node:

```$ nvm install node```
```$ nvm use node```

Initialise the NPM project (this will create a file package.json)

```$ npm init -y```

Add the jest package to our project

```$ npm add jest```

Also install jest globally (this is so we can run the `jest` command)

```$ npm install -g jest```

# Testing

```$ jest```

## Running the app/code itself

Run node:

```$ node```


Create a new bankApp instance:

```const BankingApp = require("./bankingApp")```
```const bankApp = new BankingApp()```

Make a deposit

```bankApp.deposit(1000)```
```bankApp.deposit(2000)```

Make a withdrawal

```bankApp.withdrawal(500)```

Print the statement

```bankApp.printStatement()```

## Final Reflections

I have struggled to correctly test for a full output to the console.

The things that I have learnt through this project will be hugely valuable to me in future.
