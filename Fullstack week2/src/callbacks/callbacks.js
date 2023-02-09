const calculate = (x, y, operation) => {
    return operation(x, y)
} 

const add = (x, y) => {
    return x+y
}

const subtraction = (x,y) => {
    return x - y
}
const multiplication = (x,y) => {
    return x *y
}
const division = (x,y) => {
    return x/y
}

console.log(calculate(2,3 , add))
console.log(calculate(6,3, subtraction))
console.log(calculate(6,3, multiplication))
console.log(calculate(6,3, division))

/* Class Exercises 1

Let's start with a simple callback example to warm up:

    a) Create a new folder called callbacks and create a new file called callbacks.js
    b) Create a function called calculate that takes 3 parameters: x, y and a callback called operation
    c) Create another function called add that takes 2 parameters: x and y and returns the sum of x and y
    d) Call the calculate function with the appropriate parameters to test your code

Right now our calculator only supports addition, that makes that calculator pretty useless. Let's add some more operations by adding some more functions:

- subtraction
- multiplication
- division

    f) call the function calculate with the appropriate parameters to test your code. */
