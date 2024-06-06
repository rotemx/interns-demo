function delay(cb, delay)
{
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(cb());
		}, delay);
	});
}

async function f()
{
	try
	{
		let oneValue = await delay(() => {
			console.log("FIRST");
			return 1
		}, 1000);
		
		let twoValue = await delay(() => {
			console.log("SECOND");
			return 2
		}, 1000);
		
		let threeValue = await delay(() => {
			console.log("THIRD");
			return 3
		}, 1000);
		
		let fourValue = await delay(() => {
			console.log("FOURTH");
			return 4;
		}, 1000);
	} catch (e)
	{
		return e.message;
	}
}

f();
