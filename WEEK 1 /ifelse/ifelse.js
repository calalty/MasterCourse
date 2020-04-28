let doorOpen = true
let doorCatFlap = true
// if else statments
if (doorOpen == false && doorCatFlap == true) { // && and == is essential
    console.log("Use Cat Flap") // data output if variables are the same
}
else if (doorOpen == false && doorCatFlap == false) { // do this
    console.log("Ring the bell or meow") // data output if variables are the same
}
else if (doorOpen == true && doorCatFlap == false) { // do this
    console.log("Use the Door") // data output if variables are the same
}
else if (doorOpen == true && doorCatFlap == true) { // do this
    console.log("Cat Flap and Door Open") // data output if variables are the same
}
else{ // if nothing else matched then do this
    console.log("Buy a door and Cat flap") // data output if no variables are the same
}

// CHALLENGE - turn lights on or off
lightOn = true

if (lightOn == true) {
    lightOn == false // two options for the light switch
    console.log("The light is on.")
}
else {
    lightOn == true
    console.log("The light is off.")
}
// simplified version? no, because it would'nt actually physically turn off the light
if (lightOn == true) {
    console.log("The light is on.")
}
else {
    console.log("The light is off.")
}

// CHALLENGE - create a programme for a password, if less than 8 ...
let password = "Callum"
if (password.length <= 8) {
    console.log("Get a longer password")
}
else {
    console.log(password)
}

// CHALLENGE - create an if statement that checks the age of a person
let age = 65

if (age < 18) {
    console.log("You cant come in!")
}
else if (age < 60) {
    console.log("You can pay full price")
}
else {
    console.log("You get a discount.")
}

/*
- Challenge 1:
Create a variable called password.
Check how many letters are in the password, if there are less than 8 log to the console that the password is too short. 
Otherwise log the password to the console.
*/

let password3 = (pass) => {
if (pass.length < 8){
console.log("PASSWORD IS TOO SHORT")
}
else {
console.log(pass)
}
}
password3("Helloman")

/* 
- Challenge 2:
Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is log “This number is divisible by 3 or 5” to the console. 
Otherwise log “This number is not divisible by 3 or 5”.
*/

let num = 6
if(num % 5 == 0 || num % 3 == 0)
console.log(`${num} is divisble by 3 or 5`)
else {
    console.log(`${num} is not divisble by 3 or 5`)
}

/*
- Challenge 3:
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, 
if it’s divisible by 5 log “buzz” to the console, 
if it’s divisible by both 3 and 5 log “fizz buzz” to the console. 
Otherwise log num to the console.
*/

let fizzBuzz = (num) => {
    if (num % 3 == 0 && num % 5 == 0) {
    console.log("FIZZ BUZZ")
}
else if  (num % 5 == 0) {
   console.log("BUZZ")
}
else if (num % 3 == 0) {
    console.log("FIZZ")
}
else {
    console.log(num)
}
}

fizzBuzz(15)

/*
- Challenge 4:
Create a variable called num.
Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).
*/

let palindrome = (pal) => {
    if (pal) {
    console.log("PALINDROME")
}
else {
    console.log("NOT PALINDROME")
}
}
palindrome(20202)

/*
- Challenge 5:
Create a variable called time, a variable called placeOfWork and a variable called townOfHome.
Create an if statement that logs to the console where someone is at times of the day. 
E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
*/

let time = 7
let work = "Work"
let home = "Home"

if (time == 7) {
console.log(`I am at ${work} at ${time}`)
}
else if
    (time == 9) {
console.log(`I am at ${home} at ${time}`)
}

/* 
- Challenge 6:
Take the string
“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
Find the index of the last vowel in the string.
*/

let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

for(i = longString.length; i > 0; i--) {
    if (longString[i-1] == "a" || 
    longString[i-1] == "i" ||
    longString[i-1] == "e" ||
    longString[i-1] == "o" ||
    longString[i-1] == "u") {
		console.log(`the index of the last vowel in the string is: ${i-1}`);
		break;
	}
}
longString1 = longString.lastIndexOf('i')
console.log(longString1)

/* 
- Challenge 7:
Create a variable called word that takes a string.
Create an if statement that checks if the last letter is the same as the first. 
If it is return true, otherwise return false.
*/

let word = "worw"
let firstLetter = word.charAt(0);
let lastLetter = word.charAt(3)
if (firstLetter == lastLetter) {
    console.log(true)
}
else {
    console.log(false)
}

/* 
- Challenge 8:
Create two variables called num1 and num2.
Create an if statement that checks if the result of the sum is even. 
If it is return the number, otherwise return the numbers multiplied together.
*/

let num1 = 9
let num2 = 6

if (num1 % 2 == 0 && num2 % 2 == 0) {
console.log(num1 + num2)
}
else {
console.log(num1 * num2)
}

/* 
- Challenge 9:
naughts and crosses board
Write an if statement that checks if the items on the top row meet a winning condition. 
So the top row are all ‘o’s or all ‘x’s.
*/

