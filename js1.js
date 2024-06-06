// statement
// declaration

// global (window / global / globalThis) / function-level scope;
var x;
function myFunc(){
	if (true) {
		
		{
			{
				let x;
			}
			
		}
	}
}
// block-level {}
let obj = {}
const xx = [1,2,3]; //cannot re-assign


// assignment
x = 8;

// conditional
if (true) {}

// loops
// while
// for
for (let i = 0; i < x.length; i++)
{
	const numberElement = x[i]; //iteration
}

for (let prop in obj) { // keys
}
for (let value of obj) { // values
}

// {} keys: string, number, Symbol
// for..in () {}
// for..of () {}



// expression - HAS A VALUE
// PRIMITIVE
7
"hello"
true;

// OBJECT
[1,2];
{};

// expression-statement
function getSix() {
	return 6
}

function getVoid() {
	return
}


// function invocation
getSix();
getVoid(); // undefined

let x;
let arr = [1,2];
arr[4];
let obj2 = {name:"John"}
obj2.age // undefined

class MyClass{
	field;
}

