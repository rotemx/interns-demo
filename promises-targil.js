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
