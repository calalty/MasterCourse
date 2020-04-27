// an array groups data such as lists
// bad practise to mix floats, integers and strings
// define an array with []
let shoppingList = ["Eggs", "Toilet Paper", "Milk"]; // string array
let numberArray = [0, 1, 2, 3]; // numbers array
numberArray.splice[2, 0, 2]
console.log(numberArray) // adding the number '2'

// .length checks how many elements in a list
console.log(shoppingList.length); // index starts at 0 not 1

// .push adds to an existing array
shoppingList.push("Cheese");

// .pop subtracts to an existing array
shoppingList.pop();

// .table shows the element in table form with 'index' and 'values'
console.table(shoppingList);

// [] access an element in the array at a certain index
console.log(shoppingList[2]);

// removes "Cheese" and prints the last item "Milk"
let lastItem = shoppingList.pop();
console.log(lastItem)

// .splice
const months = ["Jan", "Feb", "March"];
months.splice(3, 0, "April")
months.splice(months.indexOf("March"), 0, "April") // .indexOf is easier to find an index in an array
// array.splice start(the index), middle(index you want to remove), end(add an element to array)... can continue
console.log(months)

// CHALLENGE - list fave websites, add 2 & remove 1
let faveWebsites = ["Amazon", "YouTube", "Ebay"]
faveWebsites.push("Game", "Reddit") // adds to items
faveWebsites.pop() // removes last item
console.table(faveWebsites) // prints as table
console.log(...faveWebsites) // gets rid of brackets around original array^
console.log(faveWebsites.indexOf('Amazon')); // finds the index of an element in the array
// if an element isn't in the array then the result will be -1

// .slice allows you to pick out certain index's in an array
let sentenceSlice = "The happy man"
console.log(sentenceSlice.slice(0,3))
// output would be 'The'

const array1 = [1, 2, 3];
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

const array2 = [1, 2, 3];
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const firstElement = array2.shift();
console.log(array2);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

let myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])

  let names = ["Cul", "Harry", "Adam"]
  let myNameIndex = names.indexOf("Cul"); // gives the index of "Cul" a value
  names [myNameIndex] = "Cal" // changes the value of Cul to Cal
  console.table(names) 