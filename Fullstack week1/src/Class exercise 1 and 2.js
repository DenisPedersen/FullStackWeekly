//Higher order function: En funktion som returnerer en anden funktion:
function createMultiplier(y) {
    return x => x *y
  }

  const timesTwo = createMultiplier(2)
  const timesThree = createMultiplier(3)
  console.log(timesTwo(100))
  console.log(timesThree(10))

  const numbers = [1,2,3,4,5,6,7,8,9,10]
  
   const square = numbers.map(x => x*2) //map returnerer et nyt array
  console.log(square)

  // 1. Create a function
  // 2. Create a new array, that array will be returned
  // 3.  Loop through the array
  // 4. For each element, call the function

  function ownMap(array, mapFunc)  {
    const mapArray = []
    for(let i = 0; i<array.length; i++) {
      const result = mapFunc(array[i], i)
      mapArray.push(result)
    }
    return mapArray
  }
  const square2 = ownMap(numbers, (num) => num **2)
  console.log("Square from own function: " + square2)

  const evenNumbers = numbers.filter( x => x%2 === 0) 
  console.log("Even numbers: " + evenNumbers)

  function myFilter (array, filterFunction) {
    const filterArray = []
    for(let i = 0; i <array.length; i++) {
      let result
      if(filterFunction(array[i])){
        result = array[i]
        filterArray.push(result)
      }
    }
    return filterArray
  }
   const evenNumbersFromMyFilter = myFilter(numbers, (x)=> x % 2 === 0)
   console.log("From my filter even numbers: " + evenNumbersFromMyFilter)

   const reduce = (arr, reduceFunc, initialValue) => {
    let sum = initialValue;
    for(let i = 0; i<arr.length; i++) {
        sum = reduceFunc(sum, arr[i])
    }
    return sum;
   }

   const sum = reduce(numbers, (sum, num)=> sum + num, 0)
   console.log("numbers after reduce function: " + sum)
   
   const multiply1 = reduce(numbers, (sum,num)=> sum * num,1)
   console.log("numbers after multiply: " + multiply1)

//CLASS EXERCISE 1:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
  }
  
  function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
  }

  //processUserInput(greeting);
   // processUserInput(name => greeting(name.toUpperCase()))
    processUserInput(name => greeting(console.log("Dit navn er " + name.length + " bogstaver langt!")))
  /*   
     1. Look at the code above and try to explain what the code does.
     -->  a. First the processUserInput takes a callback function(the greeting function). 
          b, Second, the readline-function is called to read the user's name.
          c. Third, the callback function (the greeting function) is called inside of the processUserInput-function, and processes what the user typed in as name. Afterwards it is logged to the console.
     2. Run the processUserInput function with a different callback (use lambda here) to console.log the name in uppercase.
     ## --> processUserInput(name => greeting(name.toUpperCase()))
     3. Run the processUserInput function with a different callback (use lambda here) to console.log the length of the name
     ## --> processUserInput(name => greeting(console.log("Dit navn er " + name.length + " bogstaver langt!")))
     
*/

//CLASS EXERCISE 2:
function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function operateOnNumbers(operator, x, y) {
    return operator(x, y);
  }
  
  console.log(operateOnNumbers(add, 3, 4));   // 7
  console.log(operateOnNumbers(multiply, 3, 4));   // 12
  console.log("Minus-arrow-function-as-parameter: " + operateOnNumbers((x,y)=> x-y , 6,4))


  function liftToThePowerOfThree(x) {
    return x**3
  }
  function divideByTen(x) {
    return x/10
  }

  function handleArrayFunction(operator1, operator2, array ) {
    const returnArray = []
    for(let i=0;i<array.length;i++) {
      const element = array[i]
      const liftedNum = operator1(element)
      const liftedNumDivided = operator2(liftedNum)
      returnArray.push(liftedNumDivided)
    }    
    return returnArray
  }

  console.log("After handleArrayFunction: " + handleArrayFunction(liftToThePowerOfThree,divideByTen,numbers))

/* 
  1. Look at the code above and try to explain what the code does.
     a. First, the operate on numbers function takes in an operator-function as callback plus two numbers as parameters.
     b. Second, the callback-function runs with the two numbers that was given as parameters. The result is returned.
     c. The result is logged to the console.
  2.  Run the operateOnNumbers function with a different operator (use lambda here) to subtract the numbers.
  ## -->  console.log(operateOnNumbers((x,y)=> x-y , 6,4))
  3. Based on above code example write a function that takes two functions and an array of numbers, and returns an array with the result of applying each function to each number in the array. E.g. lift to the power of 2 and then divide by 10 or something like that. 
  */
