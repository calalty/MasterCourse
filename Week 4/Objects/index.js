let carArray = [4, 'grey', true]; // an array doesnt specify what these elements are for

const carObjects = { // objects start with '{}'
    doors: { // nested objects
        numberOfDoors: 4,
        colorOfDoors: 'grey',
    },
        windows: {
            tinted: true,
            typeOfGlass: 'bullet proof',
        },
    color: 'red',
    convertible: true,
    queryCar() {
        // code to make car drive
        // 'this' references carObjects
    }
}

console.table(carObjects['doors']) // has to have quotations to access element

delete carObjects.color // or delete person[hobby];

console.table(carObjects)