

/** MAIN MODULE LOGIC
 * 
 * 1. Load the tree map data store.
 * 2. Fetch the external datasets.
 * 
 */


// IIFE: Secure the local data-store and house within the dataset
(async () => {
	console.log("IIFE: fetching treemap data...");

	// load local data-store
	const store = await fetch('./treemap.json')
		.catch(err => console.error("Fetch Error!", err))
		.then(res => res.json())
		.catch(err => console.error("Response Error!", err))
		.then(json => json)
		.catch(err => console.error("JSON Error!", err));
	console.log("fetched specifications:", store);

	// fetch external dataset
	store.dataset = await Promise
		.all([
			// kickstarter pledges
			d3.json(store.fetch.kickStarterPledges),
			// movie sales
			d3.json(store.fetch.movieSales),
			// video game sales
			d3.json(store.fetch.videoGameSales)
		])
		.catch(err => console.error("Promise.all() error!", err))
		.then(array => array)
		.catch(err => console.error("Response Error!", err));
	console.log("fetched dataset:", store.dataset);
}) ();