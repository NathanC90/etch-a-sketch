# etch-a-sketch

This project from [TOP](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) is designed to test our understanding regarding DOM. In this project, we are asked to build a browser version of something between a sketchpad and an Etch-A-Sketch.

An overview of the instructions is listed below:

1. Create a webpage with a 16x16 grid of square divs.
2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad.
   * Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
  
Regarding #3, I use a range input instead of a popup question of the number of squares.

Regarding the layout, I initially tried to use Flexbox to make a dynamic 16x16 grid. However, most of the information I can find on google is using Grid instead. Therefore, I use Grid and it turns out it's quite easy to achieve what has been troubling for me for the past three days lol.

Live Demo: [Here](https://nathanc90.github.io/etch-a-sketch/)
