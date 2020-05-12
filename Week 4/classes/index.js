

class Car { // all classes begin with a capital letter

    constructor(color, doors, convertible) { // class based on the user input for these values - init
        this.color = color; // defined by user
        this.doors = doors;
        this.convertible = convertible;
        this.wheels = true; // all cars in this class have wheels
    
    }
    drive() {
        console.log("VROOOOM!")
        }

    createDoor() {
        this.doors++;
        console.log(`you now have ${this.doors}`);
        

    }

}

const CalCar = new Car("blue", 2, false)
console.log(CalCar); // classes is a quicker way of doing objects

const KerryKar = new Car("pink", 5, true)
console.log(KerryKar);

CalCar.createDoor()
console.log(CalCar)

// create user database

class Data {

    constructor(name, age, height, nationality, password) {
        this.name = name
        this.age = age
        this.height = height
        this.nationality = nationality
        this.password = password
    }
    addAge() {
        this.age++
        console.log(this.age)
    }
}

const Cal = new Data("Cal", 19, `${6}ft`, "British", 1234)
console.log(Cal)

Cal.addAge()

console.log(Cal)

// create a person at CodeNation

class CodeNation {
    constructor(name, age, role) {
        this.name = name
        this.age = age
        this.role = role
    }
}

// const Callum = new CodeNation("Cal", 19, "Student")
// console.log(Callum)

class Student extends CodeNation {
    constructor(name, age, role, status, employer) {
        super(name, age, role) // inheriting the parameters from its extension...
        // it's taking name, age, role FROM CodeNation
        this.status = status
        this.employer = employer
        // selects them all instead of going through them all via 'this.etc'
    }
}

class Staff extends CodeNation {
    constructor(name, age, role, room, employeeNum) {
        super(name, age, role)
        this.employeeNum = employeeNum
        this.room = room
    }
}

// CHALLENGE - 
// Let’s create a class called Cars for a car parking company.
// This will allow you to store information of: 
// car registration number, number of hours parked and total amount charged. (Say £1.50 per hour?)
// The first car entered the car park, parked for 5 hours and ready to pay. 
// Display this information so the driver can pay for his/her parking fee.

class Cars {

    constructor(regNum, hrsParked) {
    this.regNum = regNum
    this.hrsParked = hrsParked
    this.parkingCharge = 1.50
}
chargePerHour() {
    this.parkingCharge *= this.hrsParked
    console.log(`Your Parking Charge is £${this.parkingCharge}0`)
}
}

const Mustang = new Cars("L053R", 7)
console.log(Mustang)

Mustang.chargePerHour()

console.log(Mustang)

