/* a) Change the code to ES6 classes. You should use constructors, the super and extend keyword. */

/* function Employee(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate; //"01/01/2015"
}

function Manager(jobTitle, descriptionOfJob, employeesManaged) {
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob; //"Manager of the Sales Department"
    this.employeesManaged = employeesManaged;
}

function Department(departmentName, employees) {
    this.departmentName = departmentName;
    this.employees = employees; // ["Steve", "Marc"]
}

function Contract(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
    Employee.call(this, name, salary, hireDate);
    Manager.call(this, jobTitle, descriptionOfJob, employees.length);
    Department.call(this, departmentName, employees);
}
 */
class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }    
    toString () {
        return `Name: ${this.name}, Salary: ${this.salary}, hire date:  ${this.hireDate}` 
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged) {
       super(name, salary, hireDate)
       this.jobTitle = jobTitle;
       this.descriptionOfJob = descriptionOfJob;
       this.employeesManaged = employeesManaged
    }
    toString () {
        return `${super.toString()}, jobtitle: ${this.jobTitle}, description of job: ${this.descriptionOfJob}, employees managed: ${this.employeesManaged}`
    }
}
class Department extends Manager {
    constructor(name, salary, hiredate, jobtitle, descriptionOfJob, employeesManaged, departmentName, employees) {
        super(name, salary, hiredate, jobtitle, descriptionOfJob, employeesManaged)
        this.departmentName = departmentName
        this.employees = employees;
    }
    toString() {
        return `${super.toString()} department name: ${this.departmentName}, employees: ${this.employees}`
    }
}
class Contract extends Department{
    constructor(name, salary, hiredate, jobtitle, descriptionOfJob, employeesManaged, departmentName, employees) {
    super(name, salary, hiredate, jobtitle, descriptionOfJob, employeesManaged, departmentName, employees)
    }
   toString() {
    return super.toString()
   }
} 

const contract = new Contract("John", 12, "01/01/2019", "Teacher", "Teaches stuff to people", 0, "The Classroom", 0)

console.log(contract.toString())


/* b) Create a toString() function for each of the Employee, Manager and Department class using the template literal. In the toString() remember to call the super.toString() method to get the parent class properties. The toString() function of the Department class should return a string with the following format: */

/* 
c) Loop through the numbers array and the employee object and print out the values using the propper for loop method. (for-in, for-of) */

const numbers = [1,2,3,4,5,6,7,8,9,10];
const employee = new Employee("Steve Taylor", 50000, "01/01/2015");

for (number in numbers) {
    console.log(`numbers.${number} = ${numbers[number]}`)
}
for (const prop in employee) {
    console.log(`employee.${prop} = ${employee[prop]}`)
}

/* da) Change the calculator function to an arrow function. db) Change the function to a one line function by use the implicit return. 
const num1 = 5;
const calcaulator1 = (num1, ...num2) => num1 + num2

dc) Create a default value for one of the parameters. dd) Use the rest operator to change the function to accept any number of parameters. */
/* const calcaulator = function (num1, num2) {
    return num1 + num2;
} */

const calcaulator1 = (...values) => {
    let result = 0;
    for(let value of values) {
    result += value;
}
return result
}
console.log(calcaulator1(5,6))
 

/* e) Use destructuring to get the jobTitle and descriptionOfJob properties from the manager object. */

const manager = new Manager("Johnny", 10000, "01/01/2000", "Bossman", "The boss", 100)
const managerJobTitle = manager.jobTitle;
const managerJobDescription = manager.descriptionOfJob;

console.log("Job title: " + managerJobTitle, "Job description: " + managerJobDescription)