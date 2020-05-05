
// can manipulate elements and then change the display 
// can be done with JS aswell as CSS

// style a single variable with multiple attributes, 
// ie color, 
// size, etc

const button = document.getElementById("button")
const input = document.getElementById("input")

// For loops allow to go through text more quickly 

const paragraphs = document.getElementsByTagName("p")

for (i = 0; i < 3; i++) {
paragraphs[1].style.color = "red"
}

// Allows the click of your mouse to change colour
const myFirstHeading = document.getElementById("heading")
myFirstHeading.addEventListener("click", () => {
    myFirstHeading.style.color = "purple"
})

myFirstHeading.style.color = "blue" 
myFirstHeading.style.backgroundColor = "pink"
myFirstHeading.style.fontSize = "50px"
myFirstHeading.style.fontStyle = "italic"

// Adds button element

button.addEventListener("click", () => {
    // myFirstHeading.style.color = "yellow"
    myFirstHeading.style.color = input.value // input color into button element and it changes
    myFirstHeading.style.fontSize = input.value // inputs font size into button element
    // user has to input a number then 'px' after
})

// Targets all small headings (h2)

const smallerHeading = document.getElementsByClassName("smallerHeading")

for (i = 0; i < smallerHeading.length; i++) {
    smallerHeading[1].style.color = "pink"
}

// .querySelectorAll selects all "li"

const list = document.querySelectorAll("li")

for (i = 0; i < list.length; i++) {
    list[1].style.color = "orange"
}

// in a function, 
// style a single variable with multiple attributes, 
// ie color, 
// size, etc

/**
 * three variables have been created
 * button when clicked modifies the heading based on user input
 */