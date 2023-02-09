const calculate = (x, y, operation) => {
    return operation(x, y)
} 

//PROMISES

  const add = (x, y) => {
    return new Promise((resolve, reject) => {
        if (isNaN(x) || isNaN(y)) { reject('Error : ' + err) 
        }
        resolve(x+y)
    })
}

const subtract = (x, y) => {
    return new Promise((resolve, reject) => {
        if (isNaN(x) || isNaN(y)) { reject('Error : ' + err)
        }
        resolve(x-y)
    })
}
const multiply = (x, y) => {
    return new Promise((resolve, reject) => {
        if (isNaN(x) || isNaN(y)) { reject('Error : ' + err)
        }
        resolve(x*y)
    })
}
const divide = (x, y) => {
    return new Promise((resolve, reject) => {
        if (isNaN(x) || isNaN(y)) { reject('Error : ' + err)
        }
        resolve(x/y)
    })
} 

console.log(calculate(3,1,add))
console.log(calculate(5,2, subtract))
console.log(calculate(5,2, multiply))
console.log(calculate(5,0, divide))

//ASYNC/AWAIT SYNTAX
const calculate_async = async (x, y, operation) => {
    try {
        let res = await operation(x, y)
        console.log(res)
    } catch (err) {
        console.log('Error : ' + err.message)
    }
}
console.log(calculate_async(3,1,add))


//THEN SYNTAX
/* calculate(5,2, add).then(res => {
    calculated_res = res
    console.log(calculated_res) }).catch(err => {console.log('Error : ' + err.message)}).then((res) => {
        calculate(calculated_res, 2, subtract).then(res => {
            calculated_res = res
            console.log(calculated_res) }).catch(err => {console.log('Error : ' + err.message)})
        }).then((res) => {
            calculate(calculated_res, 2, multiply).then(res => {
                calculated_res = res
                console.log(calculated_res) }).catch(err => {console.log('Error : ' + err.message)})
            }).then((res) => {
                calculate(calculated_res, 2, divide).then(res => {
                    calculated_res = res
                    console.log(calculated_res) }).catch(err => {console.log('Error : ' + err.message)})
                })
 */


/* Class Exercises 2 Implement your own Promises

    a) Create a new folder called promises and create a new file called promises.js

    The above calculator exercise was a good warm up, but we can do better. Let's create our own promise that will do the same thing as the calculate function from the previous exercise.

    b) Change the calculate function to return a promise instead of a value and call the appropriate resolve or reject function depending on the result of the operation function call. Make sure to reject the promise if the operation function throws an error like divide by zero!

    c) Call the new calculate function with the appropriate parameters to test your code.

    d) Now try to chain add, subtract, divide and multiply using the .then syntax to the new calculator functions that returns a promise. How is that possible?? Explain!!

    e) Change the calculate function to use the async/await syntax instead of promises
 */