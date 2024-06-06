
// this: window/global / globalThis
globalThis.name = "My name is Global";
const
	john    = {
		name: "John",
		getThis: function(x,y) {
			console.log(arguments);
			console.log(this.name)
		},
		getThisArrow: (...args) => { // ES2015
			console.log(args)
		}
	},
	james = {
		name: "James",
		walk: function() {
			console.log(this.name + " is walking")
		}
	};

john.getThis(4,5); //this context
john.getThisArrow(3,3,3,5); //this context
// james.walk();
