// DRY - do not repeat yourself !!!!!

let func       = function (x, y) {
	console.log(arguments);
	console.log(this.name)
};


const
	john        = {
		name   : "John",
		getThis: func.bind(this)
	},	john2 = {
		name   : "John",
		getThis: function (x, y) {
			console.log(arguments);
			console.log(this.name)
		}
	},	john3 = {
		name   : "John",
		getThis: func	},	john4 = {
		name   : "John",
		getThis: function (x, y) {
			console.log(arguments);
			console.log(this.name)
		}
	},	john5 = {
		name   : "John",
		getThis: func	},	john6 = {
		name   : "John",
		getThis: function (x, y) {
			console.log(arguments);
			console.log(this.name)
		}
	},	john7 = {
		name   : "John7",
		getThis: function (x, y) {
			console.log(arguments);
			console.log(this.name)
		}
	},	john8 = {
		name   : "John8",
		getThis: function (x, y) {
			console.log(arguments);
			console.log(this.name)
		}
	},	john9 = {
		name   : "John9",
		getThis: function (x, y) {
			console.log(arguments);
			console.log(this.name)
		}
	};
