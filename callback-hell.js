setTimeout(() => {
	try
	{
		console.log("FIRST");
	} catch (e)
	{
	
	}
	setTimeout(() => {
		try
		{
			console.log("SECOND");
		} catch (e)
		{
		
		}
		setTimeout(() => {
			try
			{
				console.log("THIRD");
			} catch (e)
			{
			
			}
			setTimeout(() => {
				try
				{
					console.log("FOURTH");
				} catch (e)
				{
				
				}
			}, 1000)
		}, 1000)
	}, 1000)
}, 1000)

// bluebird
// Q
