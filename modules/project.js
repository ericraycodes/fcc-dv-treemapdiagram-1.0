

/** RENDER THE CONTENT OF THE PROJECT
 * 
 * 1. Act as parent script for rendering the Header, Map, and Footer contents.
 */


export default function renderProject(Store) {
	console.log("R E N D E R    P R O J E C T");

	// HEADER
	const header = d3.select("body").append(Store.heading.container);
	// title
	header.append(Store.heading.title.element)
		.attr("id", Store.heading.title.id)
		.html(Store.heading.title.html);
	// description
	header.append(Store.heading.description.element)
		.attr("id", Store.heading.description.id)
		.html(Store.heading.description.html);


	// TREE MAP
	d3.select("body").append("main")
		.html("The tree map diagram here.");


	// FOOTER
	const footer = d3.select("body").append(Store.footing.container);
	// address
	footer.append(Store.footing.address.element)
		.html(`${Store.footing.address.about} 
			${Store.footing.address.programmer}. 
			${Store.footing.address.year}.
		`);
	// github
	footer.append(Store.footing.github.element)
		.attr("target", Store.footing.github.target)
		.attr("href", Store.footing.github.href)
		.html(Store.footing.github.content);
}