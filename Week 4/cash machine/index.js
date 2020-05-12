let users = {
    // 1234: {
    //     name: "Cal",
    //     pin: 123,
    //     balance:0
    // }
}

const genAccNum = () => {
    // gen account number and return it
    return Math.ceil(Math.random()* 100)
}

// user can enter name and pin
const createUser = (name, pin) => {
    let accNum = genAccNum();

    users[accNum] = {
        name,
        pin
    }
}

createUser("Cal", 6969)

console.table(users)