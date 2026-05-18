# odin_etch-a-sketch

**Source:**
- The Odin Project, Foundations Course, JavaScript Basics, Project: Etch-a-Sketch

https://www.theodinproject.com/lessons/foundations-etch-a-sketch


**Project Scope:**
- JS DOM Manipulation Focus w/ HTML/CSS support
- Create initial 16x16 grid of sqaures that change color when user hovers over them and allow user to create a new grid, acceptable range 1-100



**Project Key Aspects:**
- Breaking down the project instructions into smaller pieces; instead of thinking how to add a 16x16 grid, I first understand think how to add 1 sqaure
- CSS Styling breakthrough with border box, flexbox, and max-width for the grid
- Variables that change depending on user input, like # of sqaures and square padding, need to be function parameters
- Ensure grid range is within 1-100 by setting minimum and maximum limits
- A variable reference to nodes disapper when those nodes are removed, the reference to new nodes, needs to be re-established
- A random color button that generates a new background color hex code whenever the mouse hovers a sqaure


**Programming Fundamentals Used:**
- Git
- Conditionals
- Functions
- Loops
- DOM Manipulation and DOM variable references
- Events (Listeners)


**Project Considerations/Logic Errors:**
- Add event delegation onto the grid parent
(implemented on 05/18/2026)
- Randomize sqaure colors when hovering(implemented on 05/18/2026)
- Initial color button does not override the random color set onto the sqaures (!)
- Add a darken/lighten opacity effect, results in normal color after 10 hovers (?)