// promises = a function that 'promises' to return a value at some point in the future

/*
resolve - done the promise
reject - not doing the promise
pending - doing the promise
*/
const myPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (num < 5) {
            // reject('invalid number')
            // }
            resolve('step 2');
        }, 5000)
    })

}



const main = async () => {
    console.log('step 1')
    let resultOfStep2 = myPromise(1).catch((reason) => {
        console.log(reason)
    })
    console.log(await resultOfStep2)
    console.log('step 3')
}

main()
myPromise(3)