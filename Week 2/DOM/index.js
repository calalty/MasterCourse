// alert("Did this work?")

// can manipulate elements and then change the display 
// can be done with JS aswell as CSS

document.getElementById("heading").style.color = "purple"
document.getElementById("heading").style.backgroundColor = "pink"

const myFirstHeading = document.getElementById("heading")
const button = document.getElementById("button")
const input = document.getElementById("input")
const paragraphs = document.getElementsByTagName("p")

// For loops allow to go through text more quickly 

for (i = 0; i < 3; i++) {
paragraphs[i].style.color = "red"
}

// Allows the click of your mouse to chnage colour

myFirstHeading.addEventListener("click", () => {
    myFirstHeading.style.color = "blue" 
})

// Adds button element

button.addEventListener("click", () => {
    // myFirstHeading.style.color = "yellow"
    myFirstHeading.style.color = input.value // input color into button element and it changes
})


/**
 * three variables have been created
 * button when clicked modifies the heading based on user input
 */