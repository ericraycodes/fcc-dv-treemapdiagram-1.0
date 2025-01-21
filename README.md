# About
A *Tree Map Diagram*. This is the fifth certification project of freeCodeCamp's Data Visualization Course.

# Tools
  1. *D3js version 7*
  1. JavaScript
  1. GitHub, GitBash
  1. *GitHub Pages* for hosting
  1. Sublime Text (Editor)
  1. VS Code (Live Server)

# Logic
The project is data-oriented. Visual-renders are dictated by: the availability and selection of data; user-interaction.
The *es modules* is used to compartmentalize scripts - a comfortable way of developing and debugging.

# Workflow
  1. Created initial *json* file as **data-store** to house *external data* and *visual specifications* for the tree map.
  1. Made sure that the external datasets are fetched and available in the **data-store**.
 

# Notes
  1. The *es modules* does not need the **defer** attribute and placed within the html `<body/>`.
  1. The *es modules* may or may not use the *DOMContentLoaded* DOM event. This project used an *Immediately Invoked Function Expression (IIFE)*. The `<script type="module" ...></script>` runs after everything else (HTML, CSS) are parsed.