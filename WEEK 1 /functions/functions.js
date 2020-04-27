/**
 * functions - allow us to reuse code
 */

// CHALLENGE - create a function for when a kettle is boiled or not
let kettleBoiled
const makeDrinkOfTea = () => { // declaration
    // arrow function
    // ES6 syntax
   if (kettleBoiled) {
    console.log("The kettle is boiled.")
    kettleBoiled = false
}
else {
    console.log("The kettle is not boiled")
    kettleBoiled = true
}
}
makeDrinkOfTea(false)

// CHALLENGE - multiple of 3 or 5 and returning the value
let num
let sum3 = 0
const threeOrFive = (num) => {
for (i = 0; i < num; i++) {
if (i % 3 == 0 || i % 5 == 0) {
sum3 += i; // sum = sum + i
}
}
return sum3; // a return is used to reuse the value given
}
let calcSum = threeOrFive(100) // we can now use this value again as it has been returned
console.log(calcSum) // as we do here

// CHALLENGE - create a cash machine
const withdrawl = (withdrawlAmount, accountNumber) => {
   console.log(`Withdrawing ${withdrawlAmount} from ${accountNumber}`)
   // need an account bank balance (something to withdraw from...)
}
withdrawl(123456, 500)

const changeValue = (numberOne, numberTwo) => {
    let total = numberOne + numberTwo
    let multipy = numberOne * numberTwo
    if (total % 2 == 0) {
    console.log(total)
}
else {
    console.log(multipy)
}
}
changeValue(6, 6)

const numberChange = (number1, number2) => {
    let total1 = number1 + number2
    let multipy1 = number1 * number2
    if (total1 % 5 == 0) { // if number1 + number2 is a multiple of 5 then do this
        console.log(total1)
    }
    else {
        console.log(multipy1) // if not multiply the numbers that dont make a multiple of 
    }

}

numberChange(25, 25)

const myFunc = (currency='GBP', language='ENG') => {
    console.log(currency)
    console.log(language)
    }
    
    myFunc();

const options = (darkMode=true, fontSize='18pt', highContrast=false, fontWeight='standard') => {
    console.log(darkMode)
    console.log(fontSize)
    console.log(highContrast)
    console.log(fontWeight)
}

options(undefined, '22pt', undefined, 'bold')

    