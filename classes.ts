// JS - weakly typed

let x; // dynamic type = no need to define
x = 7; // can assign any type
x = "string"; // can assign a different type
x = [];

// types and values
// number - 1,2,3,0.5 ....
// boolean - true, false
// undefined - undefined

let y; // undefined

// two type categories


// Primitives

// number
// boolean
// string
// undefined
// null
// Symbol
// BigInt

// Object

// literal object
let o = {};

// instance of a class
let date = new Date();

// class is a type of object

// built-in classes in JS :
Date;
Math;
RegExp;
Function;
Array;
Error;

// user class:
// can define PROPERTIES and METHODS in the PROTOTYPE
//
class Person {
	static allPersons: Person[];
	
	constructor(public name: string) {
		// this runs on every instance creation
		Person.allPersons = Person.allPersons || [];
		
		Person.allPersons.push(this); // "this" is the instance
	}
	
	walk() {
		console.log(this.name + " is walking");
	}
}

// can create (instantiate) a new instance (variable of type Person)
let person  = new Person("John"); // constructor invocation
let person2 = new Person("Jane"); // constructor invocation
let person3 = new Person("James"); // constructor invocation
let person4 = new Person("Jorge"); // constructor invocation
console.log(Person.allPersons);

// inherits from Object
// inheritance: null => Object => [class]

// PErson is the BASE class
// Employee is the Derived class


interface IEmployee {
	employeeId: number;
	color: string;
	name: string;
}

class Employee extends Person implements IEmployee {
	employeeId: number;
	color: string;
	
	constructor(public name: string) {
		super(name);
		console.log(this.name);
	}
}

let employee = new Employee("Jon");
employee.employeeId;
employee.name;
employee.walk();

console.log("employee instanceof Employee"); // true
console.log(employee instanceof Employee); // true
console.log("employee instanceof Person"); // ?
console.log(employee instanceof Person); // ?


employee.color = "red";

for (let prop in employee) {
	if (Object.hasOwn(employee, prop)) {
		console.log("prop", prop);
	}
}
