

/** RENDER THE TREE MAP DIAGRAM
 * 
 * 1. The HTML container of the diagram and the diagram - an SVG element.
 * 2. Prepare the data: construct a hierarchy. 
 */
export default function renderMap(Store) {
	console.log("Render Tree Map");


	// Container
	const svg = d3.select("body").append(Store.map.container).append(Store.map.element)
		.attr("id", Store.map.id)
		.attr("height", Store.map.dimension.height)
		.attr("width", Store.map.dimension.width);


	// Hierarchy
	const root = d3.hierarchy(Store.dataset[0])
		.sum(d => d.value ? d.value : 1 );
	console.log("hierarchy", root);


	// Tree map layout
	const treemap = d3.treemap()
		.size([Store.map.dimension.width, Store.map.dimension.height]);


	svg.selectAll("rect")
		.data(treemap(root))
		.enter()
		.append("rect")
			.attr("x", d => d.x0)
			.attr("y", d => d.y0)
			.attr("width", d => d.x1 - d.x0)
			.attr("height", d => d.y1 - d.y0)
			.attr("fill", "white")
			.attr("stroke", "blue")
			
}