

// 1. Ability to accept a user pin (pre-defined inside of parameters to start with)

const userPin = (pin) => {
    if (pin == '1234') {
    console.log(`PIN '${pin}' is CORRECT`) }
    else {
        console.log(`PIN '${pin}' is INCORRECT`)
    }
}
userPin(1234)

// 2. Check the user pin is correct before letting someone access their account - 3 attempts maximum. 

let attempts = 3
let pinNumber1 = 1234
const checkPin = (pin) => {
	if(attempts == 0) {
        console.log("NO MORE ATTEMPTS LEFT")
        // no more attempts left
    }
	else if(pin == pinNumber1) {
        console.log("CORRECT PIN")
		//pin is correct, continue
        return
    }
	else {
    (pinNumber1 != pin)
    attempts -= 1
    console.log(`You have ${attempts+1} attempts left.`)
	}
}
checkPin(13945)
checkPin(7859)
checkPin(1211)
checkPin(1211)

/*
3. 
Withdraw from their bank account 
A.Check withdrawals for the day, a limit of £250 is normally used. 
So, if a user has already withdrawn £150, they can only do £100 more.
*/

const withdrawl1 = (withdrawlAmount1) => {
    if (withdrawlAmount1 <= bankBalance) {
    console.log(`You have withdrawn £${withdrawlAmount1}`)
    console.log(`You have £${bankBalance-=withdrawlAmount1} left`)
    return withdrawlAmount1
    }
    else {
        console.log("NO CASH TO WITHDRAW")
        return
    }
}
let bankBalance = 500
withdrawl1(250)
withdrawl1(150)
withdrawl1(100)


const withdrawl = (withdrawlAmount) => {
    if (withdrawlLimit <= withdrawlLimit) {
    console.log(`You have withdrawn £${withdrawlAmount}.`)
    console.log(`There is £${withdrawlLimit-=withdrawlAmount} left for your daily withdrawl allowance.`)
    return withdrawlAmount
    }
   else {
       console.log("YOU ARE OVER YOUR WITHDRAWL LIMIT.")
}
}
let withdrawlLimit = 250
withdrawl(100)
withdrawl(50)
withdrawl(25)

// 4. Deposit into their account up to £250 a time... isn’t so straightforward when we get to prompts.  

const deposit = (depositAmount) => {
    if (depositAmount <= depositLimit) {
    console.log(`You have deposited £${depositAmount}`)
    console.log(`There is £${depositLimit-=depositAmount} more for your daily deposit allowance.`)
    return depositAmount
    }
   else {
       console.log("YOU ARE OVER YOUR DEPOSIT LIMIT.")
}
}
let depositLimit = 250
deposit(100)
deposit(22)
deposit(60)

// 5. Change the user pin with validation

// 6. Check balance 

const balance = (checkBalance="£500,000") => {
    if (checkBalance) {
        console.log(checkBalance)
    return
    }
}
balance()

// 7. Statement of actions of the transactions occurred

/* 8. Exchange currency - you can pick your currency. 
If a user wants to exchange £100 and the conversion is 1.5, 
then they’d get 150 of another currency. */

const changeCurrency = (currency) => {
    if (currency) {
    console.log(currency * 1.5)
    }
}
changeCurrency(10) 

// 9. Length of pin
