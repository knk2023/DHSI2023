//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(50,50,50,50);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"name": [
		"Walk",
		"Stroll",
		"Amble",
		"Derive",
		"Saunter",
		"Scurry",
		"Drift",
		"Run",
		"Jog",
		"Limp",
		"Skip",
		"",
		"Hightail it "
	],
	"origin": [
		"#name# to the #place# #ambiance#, then #direction# to discover #discovery#."
	],
	"place": [
		"station",
		"corner",
		"bar",
		"restaurant",
		"war monument",
		"brick wall",
		"the classroom",
		"the big tree",
		"the ugly statue",
		"the strange monolith"
	],
	"ambiance": [
		"at dusk",
		"in the morning",
		"by the light of the new moon",
		"when the cats meow",
		"during a lightening storm",
		"when the cawdads sing"
	],
	"direction": [
		"go left",
		"proceed #cardinal#",
		"look up ",
		"look down",
		"zigzag for three paces",
		"go right",
		"sit wherever you can ",
		"",
		"proceed through varied ambiances",
		"lie down",
		"jump down the rabbit hole"
	],
	"cardinal": [
		"east",
		"west",
		"south",
		"north"
	],
	"discovery": [
		"the ebb and flow of the infinite",
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
		"a society founded on play"
	],
	"device": [
		"sewage system",
		"elevator",
		"bathroom",
		"washing machine",
		"dishwaher",
		"iron"
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = random(15,20);
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Courier");
		//This centers the text on the click
		textAlign(CENTER, CENTER);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill("green");
		//This positions the text
    text(this.text, this.x, this.y);
  }
}