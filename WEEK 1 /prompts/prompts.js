let userInput = prompt("Enter a number between 1 and 6:") // prompt is a browser only function
let randNum = Math.floor(Math.random()*6) + 1

if (userInput == randNum) {
    alert(`You rolled a ${randNum}`)
}
    else {
        (userInput >= 7)
        alert("That isn't a number from 1 -6")
    }
        // alert is used to notify the person inputting prompt

        while(true) {
            let userInput = prompt("Enter your guess")
            let randNum = Math.floor(Math.random() * 6)+1
            console.log(randNum)
            if (userInput == randNum) {
                alert("you guessed the correct number")
                break
            } else {
                alert("your guess was incorrect");
            }
        }

        let name = "";
        while (true) {
            name = prompt("Please enter your name")
            if (name != "") {
                break
            }
        }







