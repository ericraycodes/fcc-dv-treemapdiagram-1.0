

/** MAIN MODULE LOGIC
 * 
 * 1. Load the tree map json data.
 * 2. Fetch the external datasets.
 * 
 */


document.addEventListener("DOMContentLoaded", () => {
	console.log("M A I N");

	// fetch the tree map json
	fetch('/treemap.json', { 
		"method" : "GET",
		"headers" : { "Accept" : "application/json" }
	})
		.catch(err => console.error("Fetch Error!", err))
		.then(res => {
			console.log(res);
			return res.json();
		})
		.catch(err => console.error("Response Error!", err))
		.then(json => {
			console.log(json);
		})

});