//Let's start by adapting our drawable text to fade
//To make it more readable, we'll just generate one word / click
//Try changing the lines, colors, and alphas!
//Again, changing lines is just like Tracery grammars
lines=["the ebb and flow of the infinite",
		"a kaleidoscope endowed with consciousness",
		"turtles taking a walk",
		"protests against the division of labor which makes people into specialists",
		"a spatial field",
		"yourself emotionally disoriented",
		"banality",
		"an obsession with material comfort like the #device#",
		"complete disorientation",
		"shop window displays",
		"chance encounters and mysterious pursuits",
		"a way to merge with the throng",
		"an enormous reservoir of electricity",
		"a society founded on play"]
//We will use i to track which line we just showed
i=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
//Try changing the initial background color
	background(25,64,255);
}
function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	background(0,0,0,1);
}
//This draws the word with each mouse click
function mouseClicked() {
	//This sets the text size to random - try changing more properties
	textSize(random(10,50));
	//Try any web safe font
	textFont("Courier");
	//This centers the text on the click
	textAlign(CENTER, CENTER);
	//This sets the fill to a static color - can you make it random?
	fill("red");
	//This uses the next line at the mouse position
	text(lines[i], mouseX, mouseY);
	if (i<(lines.length-1)) {
		i++;
	}
	else {
		i=0;
	}
}