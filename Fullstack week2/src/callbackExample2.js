const firstPromise = new Promise((resolve, reject) => {
    resolve('First promise')
})
const secondPromise = new Promise((resolve, reject) => {
    resolve('Second promise')
})
const thirdPromise = new Promise((resolve, reject) => {
    resolve('Third promise')
})

Promise.all([
    firstPromise,
    secondPromise,
    thirdPromise
]).then((messages) => {
    console.log(messages)
})