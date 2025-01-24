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
  1. Made submodules to divide tasks on rendering contents.
 

# Notes
  1. The *es module* does not need the **defer** attribute. It is placed within the html `<body/>`. It acts similar to a *deferred script*.
  1. This project used an *Immediately Invoked Function Expression (IIFE)* - it will run when the `<script/>` starts to execute.
  1. Important **JSON rules** to avoid errors:
    a. Do not use `// comments`.
    a. The latest-coded *object-property* must not be tailed with a *comma*.
  1. A **D3 Tree Map** hierarchical layout requires *node.value*.