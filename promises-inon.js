function first()
{
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('First');
			resolve();
		}, 1000);
	});
}

function secound()
{
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('Second');
			resolve();
		}, 1000);
	});
}

function third()
{
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('Third');
			console.log('Third!');
			resolve(3);
		}, 1000);
	});
}

function fourth()
{
	return new Promise((resolve) => {
		setTimeout(() => {
			console.info('Fourth');
			resolve(4);
		}, 1000);
	});
}

first()
	.then(secound)
	.then(third)
	.then(fourth)
	.catch((error) => {
		console.error('Error:', error);
	});
