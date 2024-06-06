function delayRun(cb, seconds = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			
			try
			{
				resolve(cb());
			} catch (e)
			{
				reject("ERROR IN CB!")
			} finally
			{
			
			}
			
			
		}, seconds * 1000);
	});
}

delayRun(() => {
	// @ts-ignore
console.log("HELLO");})
	.then(data => {
	})
	.catch(()=>console.log("ERROR CAUGHT!"))
	.finally(()=>{
	    console.log("THIS IS THE END");
	})

