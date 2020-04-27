// The switch statement evaluates an expression
// matching the expression's value to a case clause,
// and executes statements associated with that case,
// as well as statements in cases that follow the matching case.

const myName = "Cal" // creating a defined variable - "Cal"
switch (myName) { // switch (expression) {
    case "Cal":
    console.log("Good Name") // Statements executed when the result of expression matches myName
    break;
    case "Toby":
    case "Harry":
    case "Adam":
    console.log("Meh") // Statements executed when the result of expression matches myName
    break;
    default:
    console.log("That is not a name") // Statements executed when none of
    // the values match the value of the expression
    break;
}
// a case clause used to match against expression. 
// if the expression matches the specified valueN, 
// the statements inside the case clause are executed until either the end of the switch statement or a break.
// a default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses.

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

let grade = "B"
switch (grade.toUpperCase) {
  case "A":
    console.log("WELL DONE!")
    break
    case "B":
    case "C":
      console.log("Not too bad...")
      break
      case "D":
      case "E":
       console.log("FAIL!")
       break
       default:
        console.log("That is not a grade.")
        break
}
