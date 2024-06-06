interface IPerson {
	name: string;
	
	walk(): void;
}
type Gear = "auto" | "manual"; //union type

interface ICar {
	gear: Gear
}

interface IEmployee extends IPerson {
	employeeId: string;
}

abstract class PersonBase { // cannot have instances
	name: string;
	abstract run():void
	
	jump(){
		console.log(this.name + " is jumping");
	}
}

// let personBase = new PersonBase(); // Error


class Person2 extends PersonBase implements IPerson {

	
	walk(): void {
		console.log(this.name + " is walking");
	}
	
	run(): void {
		// ..
	}
}

function printPerson(person: Person2)// concrete / abstract interface
{
	console.log(person.name);
	person.walk();
}

let obj = {
	age    : 34,
	address: "sdflksjdf",
	name   : "Dan",
	walk() {
	}
};

printPerson(obj);

type colors = "red" | "Blue" | "Green";

type partilPerson= Partial<IPerson>;




let obj2: Partial<IPerson> = {
	walk(): void {
	}
};


type personAndCar = IPerson & ICar;

let personAndCar:personAndCar = {
	gear: "manual",
	name: "",
	walk(): void {
	}
}


