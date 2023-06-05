//***********Preload and Variables***********
function preload() {
  font1 = loadFont("fonts/LEMONMILK-Regular.otf");
  amog = loadImage("images/amog.jpg");
}
let = Instructions =
  "Hold LMB to draw | Press C to clear page | Left arrow for larger scale | Right aroow for smaller scale | Press A for a secial suprize ;)";
let = penSize = 20;
let = Title = "DrawOMatic";
let = Bindings =
  "1 = RED | 2 = BLUE | 3 = GREEN | 4 = BLACK | 5 = WHITE | R = RANDOM | E = ERASER";

function setup() {
  let = penColor = color(255, 0, 0);
  let = backgroundColor = color(255);
  createCanvas(1000, 1000);
  background(backgroundColor);
}

function draw() {
  noStroke();
  fill(135, 135, 135);
  rect(0, 0, 1000, 150);
  textFont(font1);
  fill(0);
  textSize(20);
  text(Instructions, 10, 70, 600, 200);
  textSize(15);
  text(Bindings, 10, 10, 700, 100);
  text("COLOR = ", 800,70)
  fill(penColor);
  rect(880, 20, 100, 100);
}

function mouseDragged() {
  noStroke(0);
  fill(penColor);
  ellipse(mouseX, mouseY, penSize);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    penSize -= 5;
  } else if (keyCode === RIGHT_ARROW) {
    penSize += 5;
  } else if (key === "e") {
    penColor = color(backgroundColor);
  } else if (key === "c") {
    background(backgroundColor);
  } else if (key === "1") {
    penColor = color(255, 0, 0);
  } else if (key === "2") {
    penColor = color(0, 255, 0);
  } else if (key === "3") {
    penColor = color(0, 0, 255);
  } else if (key === "4") {
    penColor = color(0, 0, 0);
  } else if (key === "5") {
    penColor = color(255);
  } else if (key === "r") {
    penColor = color(random(255), random(255), random(255));
  } else if (key === "a") {
    image(amog, 0, 150, 1000, 1000);
    textSize(100);
    text("mogus", 150, 250);
  }
}