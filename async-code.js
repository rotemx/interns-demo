console.log("FIRST");

// first-class citizens -
// callback - call this function when finished
setTimeout(()=>{
	console.log("SECOND");
}, 0)

console.log("THIRD");
console.log("FOURTH");

async function fn(){
	console.log('FIFTH');
}

// event loop

// setTimeout
// setInterval
// AJAX / HTTP XML Request (XHR)

// new XMLHttpRequest()
