# odin_etch-a-sketch

Source:
-   The Odin Project, Foundations Course, JavaScript Basics, Project: Etch-a-Sketch

Project Scope:
- JS DOM Manipulation Focus
- Create initial 16x16 grid of pixels that user can hover over to change color (like etch-a-sketch) and allow user to create a new grid.

Concepts Used:
- creating projet files
- breaking down the problem (make a 16 x 16 grid, how can I make 1? move from there, how do i make it wrap)
- CSS styling (border box, flexbox, max-width)
- functions
- for loops
- reference DOM nodes
- create Element variables
- DOM manipulation
- give functions parameters for values that you know will change depending on the scenario (in this case, the amount of pixels generate is different and the padding needs to change to make it so the grid doesn't use more space)
- to make function work in more scenarios, those variables that change, make them parameters

Logic Errors Encountered:
- 

Project Considerations:
- (-) Hard coding the padding will only work for one scenario
- (?) How to make event delegation work to avoid eventlistener spam?
- (?) Randomize pixel color changes when hovering
- (?) Opacity effect to simulate a darken/lighten effect (10x)
