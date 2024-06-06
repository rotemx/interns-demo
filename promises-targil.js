function delayRun(cb, seconds)
{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(cb())
		}, seconds * 1000)
	})
}

delayRun(() => {
	throw new Error("BIG MISTAKE!!")
})
	.then(data => {
		console.log('data ' + data);
	})
	.catch(err => {
		console.log('CAUGHT ERROR!!');
		console.log(err);
	})


console.log("The End");


function delayRun(cb, seconds)
{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve(cb());
			} catch(err) {
				reject(err);
			}
		}, seconds * 1000);
	})
}
delayRun(() => {
	throw new Error("BIG MISTAKE!!")
})
	.then(data => {
		console.log('data ' + data);
	})
	.catch(error => {
		console.log('CAUGHT ERROR!!');
		console.log(error.message);
	})

console.log("The End");


function delayRun(cb, seconds = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			Promise.resolve(cb())
			       .then(resolve)
			       .catch(reject);
		}, seconds * 1000);
	});
}
