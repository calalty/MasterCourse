for(let i = 0; i < 10; i++) { // generally loops use numbers
    // for(defined variable; condition; modifier[what you do to 'i'])
        /* The increment: i++
        This code is run at the end of each loop. 
        It's usually a simple increment (++ operator), but can really be any mathematical transformation. 
        It is used to move the counter (i) forward (or backwards, or whatever.
        */
console.log(i);
    }
    // OR
    let j = 0 
    // need ; before condition
    for(;j < 10; j++) {
        console.log(j)
    }
// prints out array
    let numberArray = [0, 1, 2, 3]
    for(let i = 0; i < numberArray.length; i++) { 
    console.table(numberArray[i]); // i is index for array
    }
    
    // print out each item from the shopping list individually
    let shoppingList = ["Egg", "Toilet Paper", "Milk"]// generally loops use numbers
    // for(defined variable; condition; modifier[what you do to 'i'])
        // i++  = plus 1 each time
    for(let i = 0; i < shoppingList.length; i++) { 
        console.log(shoppingList[i]); // i is index for array
        }
    
    
    let someString = "         text      "
    console.log(someString) // output = "         text      "
    let trimString = someString.trim() // .trim removes the gaps
    console.log(trimString) // output = "text"
    
    for(let i = 0; i < shoppingList.length; i++) { 
    shoppingList[i] += "s" // whatever i is equal to add 's'
    console.table(shoppingList[i])
    }

// CHALLENGE
/*
Take this string "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".
The word "hi" appears multiple times. Find the first and last occurrence of the word hi and log them to the console.
*/
let string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let firstHi = string.indexOf("hi");
let lastHi = string.lastIndexOf("hi");
console.log(firstHi);
console.log(lastHi);
for (let i = 0; i < string.length; i++) {
	if(string[i] == "h" && string[i+1] == "i") {
		console.log(`the word "hi" was found at index: ${i}`);
		break;
	}
}
for(i = string.length; i > 0; i--) {
	if (string[i] == "i" && string[i-1] == "h") {
		console.log(`the word "hi" was found at index: ${i-1}`);
		break;
	}
}

/* If we list all the natural numbers below 10 that are multiples of 3 or 5
we get 3, 5, 6 and 9
The sum of these multiples is 23.
*/
let sum1 = 0;
for (let i = 0; i < 10; i++){
    if (i % 5 == 0 || i % 3 == 0){
        sum1 += i;
    }
}
console.log(sum1);

// Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0;
for (let i = 0; i < 1000; i++){
    if (i % 5 == 0 || i % 3 == 0){ // || means or
        sum += i;
    }
}
console.log(sum);

/* Take this string 
“jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh" 
and print each letter out individually.
*/

let weirdString = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh" 
for (let i = 0; i < weirdString.length; i++) {
		console.log(weirdString[i])   
}
