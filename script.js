// TREE MAP DATA
const repository = "https://github.com/ericraycodes/fcc-dv-treemapdiagram-1.0.git/"
const DATA = {
	"navigator" : {
		"element" : "nav",
		"id" : "navigator",
		"items" : {
			"element" : "a",
			"class" : "nav-links",
		}
	},
	"heading" : {
		"container" : "header",
		"title" : {
			"text" : null,
			"id" : "title",
			"element" : "h1"
		},
		"description" : {
			"text" : null,
			"id" : "description",
			"element" : "h2"
		}
	},
	"footing" : {
		"container" : "footer",
		"html" : `<p>This <a href="${repository}" target="_blank">project</a> is made for freeCodeCamp certification purposes. Eric Ray Saladar. 2025.</p>`
	},

	// incomplete, needs the d3 aspects for drawing the diagram
	"diagram" : {
		"container" : "main",
		"id" : "diagram",
		"dimension" : {
			"height" : null,
			"width" : null,
			"pad" : null,
		},
		"tree" : {
			"element" : "svg",
			"tiles" : {
				"element" : "rect",
				"class" : "tile",
				"colors" : null,	// at least 2 color fills
				"propName" : "data-name",
				"propCat" : "data-category",
				"propVal" : "data-value",
			}
		},
		"legend" : {
			"element" : "g",
			"id" : "legend",
			"items" : {
				"element" : "rect",
				"class" : "legend-items",
				"colors" : null,	// at least 2 color fills
			}
		},
		"tooltip" : {
			"element" : "div",
			"id" : "tooltip"
			"html" : null,
			"propVal" : "data-value"
		}
	}
};
