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

for (let [key, value] of Object.entries(carObjects)) {
    console.log(key)
    console.log(value)
    break
}

mainObject.nextLevelObject

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, 
// in the same order as that provided by a for...in loop. 
// (The only important difference is that a for...in loop enumerates properties in the prototype chain as well). 