

// Import
import createProject from "./project.js";




/** MAIN MODULE LOGIC
 * 
 * 1. Load the tree map data store.
 * 2. Fetch the external datasets.
 * 3. Render the content of the project.
 * 
 */
// IIFE: Secure the local data-store and house within the dataset
(async () => {

	console.log("S T O R E    D A T A");


	// load local data-store
	const Store = await fetch('./treemap.json')
		.catch(err => console.error("Fetch Error!", err))
		.then(res => res.json())
		.catch(err => console.error("Response Error!", err))
		.then(json => json)
		.catch(err => console.error("JSON Error!", err));
	// console.log("fetched specifications:", Store);


	// fetch external dataset
	Store.dataset = await Promise
		.all([
			// kickstarter pledges
			d3.json(Store.fetch.kickStarterPledges),
			// movie sales
			d3.json(Store.fetch.movieSales),
			// video game sales
			d3.json(Store.fetch.videoGameSales)
		])
		.catch(err => console.error("Promise.all() error!", err))
		.then(array => array)
		.catch(err => console.error("Response Error!", err));
	console.log("fetched dataset:", Store.dataset);


	// Proceed to render the project content
	console.log("Store:", Store);
	createProject(Store);
	
}) ();