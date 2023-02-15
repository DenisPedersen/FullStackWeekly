//OPTIONAL CHAINING:
/* type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0? null: { birthday: new Date() } //if id === 0 return null else return a customer-object with this birthday
}

let customer = getCustomer(0);
//Optional property acces operator   ?
console.log(customer?.birthday?.getFullYear); */

//optional element acces operator, useful in arrays
// customers?.[0]


//NULLABLE TYPES: 
/* function greet (name:string | null | undefined) {
  if(name)
  console.log(name.toUpperCase())
  else
    console.log('Hello')
}

greet(undefined) */


//LITERAL TYPES:  useful for limitation of what values a variable can be assigned.
/* type Quantity  = 50 | 100;
let quantity: Quantity =  50; //nu kan Quantity -typen bruges ligesom number, string etc.

type Metric = 'cm'| 'inch' */


//INTERSECTION TYPES: (also combines types) First I create two different types of objects:
/* type Draggable = {
  drag: () => void 
}
type Resizable = {
  resize: () => void
}

//Then the two types are combined into one type (an intersection type):
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}
 */
//UNION TYPES:
/* function kgToLbs(weight: number | string){
  //Narrowing the union type down to a specific type:
  if(typeof weight == "number") {
    return weight * 2.2
  }else {
    return parseInt(weight) * 2.2
  }
}
  kgToLbs(10);
  kgToLbs('10kg') */


//TYPE ALIASES:
/* type Employee = {
  readonly id: number,             //with 'readonly' the value can't be changed later on.
  name?: string                   //? means that it is optional
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1, 
  name: 'John',
  retire: (date: Date) => {
    console.log(date)
  }
}; */



//OBJECTS:
/* let employee: {
  readonly id: number,             //with 'readonly' the value can't be changed later on.
  name?: string                   //? means that it is optional
  retire: (date: Date) => void
} = {
  id: 1, 
  name: 'John',
  retire: (date: Date) => {
    console.log(date)
  }
};
 */


//FUNCTIONS:
/* function calculateTax (income: number, taxYear = 2022): number {
    if(taxYear < 50_000) 
      return income * 1.2;
    else return income * 1.2;
}
calculateTax(10_000, 2023); */

//ENUMS:
/* const small = 1;
const medium = 2;
const large = 3; */

/* const enum Size { Small = 1 , Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize) */

//tuples: key/value-pair. 
//let user: [number, string] = [1,'John']

//ARRAYS:
/* let numbers: number[] = [];
numbers.forEach(n => n.toString) */


//THE ANY TYPE:
/* let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;   //the any type can represent any kind of value. Should be avoided as much as possible
level = 1;
level = 'A' 

function render(document: any) {
  console.log(document)
}
*/

/* 

let age: number = 20;  //annotate or explain what type a variable is 
if(age<50) 
  age +=10;
  
export{} */