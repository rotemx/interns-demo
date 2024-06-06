let arr = [];

// prototype methods - called from instance:
arr.push()
arr.split()
arr.pop()


// Static Methods:
Array.isArray([])


let promise = new Promise((resolve, reject) => {
	resolve(8);
})

let promise2 = Promise.resolve(8);

// method 1:
promise
	.then(data => {
		console.log("Data is " + data);
	})
	.catch(err => {
		
	})
	.finally(() => {
	
	});

// method 2:
(async () => {
	let data = await promise;
	console.log("Data is " + data);
})()


// TARGIL

promise1
	.then(data => {
		console.log(data); // 1
	})
	.then(data => {
		console.log(data); // 10
	})
	.then(data => {
		console.log(data); // 100
	})













Promise.resolve(1) //Promise<number>
	.then(data=>{
		console.log('data1', data);
		return "Hello"
	})
	.then(data=>{
		console.log('data2', data);
		return data*10
	})
	.then(data=>{
		console.log('data3', data);
		
		return data*10
	})
	.then(data=>{
		console.log('data4', data);
		
		return data*10
	})




function p(number) {
	return new Promise(resolve => {
		resolve(number);
	});
}

p(1)
	.then(data => {
		console.log(data)
		return data * 10;
	})
	.then(data => {
		console.log(data)
		return data * 10;
	})
	.then(data => {
		console.log(data)
	});



















function multiplyValue(value) {
	return Promise.resolve(value * 10);
}

async function func() {
	const initialValue = 1;
	console.log(initialValue);
	
	let currentValue = initialValue;
	
	try {
		for (let i = 0; i < 4; i++) {
			currentValue = await multiplyValue(currentValue);
			console.log(currentValue);
		}
	} catch (e) {
		console.error(e.message);
	}
}

func();












