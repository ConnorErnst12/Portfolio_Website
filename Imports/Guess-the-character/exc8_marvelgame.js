let scenenum = 0;
let isHuman = false;
let isGood = false;
let isBitten = false;
let isFemale = false;
let ironman;
let spiderman;
let thanos;

function preload() {
  ironman = loadImage("images/ironman.jpg");
  spiderman = loadImage("images/spiderman.jpeg");
  thanos = loadImage("images/thanos.jpeg");
}


function setup() {
  let sketch = createCanvas(800, 600);
  sketch.parent("mycanvas");
  titlePage();
}

function draw() {
  if (scenenum === 0) {
    titlePage();
  } else if (scenenum === 1) {
    scene1(5);
  } else if (scenenum === 2) {
    scene2(25);
  } else if (scenenum === 3) {
    scene3(5);
  } else if (scenenum === 4) {
    scene4(25);
  } else if (scenenum === 999) {
    endscene(50);
  }
}

function keyPressed() {
  if (scenenum === 0) {
    scenenum = 1;
  }
  else if (key === 'y' && scenenum === 1) {
    scenenum = 2;
    isHuman = true;
  }
  else if (key === 'n' && scenenum === 1) {
    scenenum = 2;
  }
  else if (key === 'y' && scenenum === 2) {
    scenenum = 3;
    isGood = true;
  }
  else if (key === 'n' && scenenum === 2) {
    scenenum = 3;
  }
  else if (key === 'y' && scenenum === 3) {
    scenenum = 4;
    isBitten = true;
  }
  else if (key === 'n' && scenenum === 3) {
    scenenum = 4;
  }
  else if (key === 'y' && scenenum === 4) {
    scenenum = 999;
    isFemale = true;
  }
  else if (key === 'n' && scenenum === 4) {
    scenenum = 999;
  }
}

function mousePressed() {
}

function titlePage() {
  background(255);
  textSize(36);
  fill(0, 0, 0);
  text("Marvel Character Quiz", width / 2 - 120, height / 2);
  textSize(24);
  text("Press any key to start", width / 2 - 80, height / 2 + 50);
}

function scene1(red) {
  background(255);
  fill(red, 50, 150);
  text("Is your character from earth? (y or n)", 50, 100);
}

function scene2(red) {
  background(255);
  fill(red, 50, 150);
  text("Is your character a goodguy? (y or n)", 50, 120);
}

function scene3(red) {
  background(255);
  fill(red, 50, 150);
  text("Has your character been bitten by a radioactive insect?(y or n)", 50, 140);
}

function scene4(red) {
  background(255);
  fill(red, 50, 150);
  text("Is your character female? (y or n)", 50, 140);
}

function endscene(red) {
  background(255, 255, 0);
  if (isHuman && isGood && !isBitten && !isFemale) {
    text("Ironman!", 50, 350);
    image(ironman, width / 2 - ironman.width / 2, height / 2 - ironman.height / 2);
  } else if (isHuman && isGood && isBitten && !isFemale) {
    text("Spiderman!", 50, 350);
    image(spiderman, width / 2 - spiderman.width / 2, height / 2 - spiderman.height / 2);
  } else if (!isHuman && !isGood && !isBitten && !isFemale) {
    text("Thanos!", 50, 350);
    image(thanos, width / 2 - thanos.width / 2, height / 2 - thanos.height / 2);
  } else if (!isHuman && isGood && !isBitten && !isFemale) {
    text("Groot!", 50, 350);
  } else if (!isHuman && isGood && !isBitten && isFemale) {
    text("Gamora!", 50, 350);
  } else if (isHuman && isGood && !isBitten && isFemale) {
    text("Captain Marvel!", 50, 350);
  } else if (isHuman && !isGood && !isBitten && isFemale) {
    text("Black Widow!", 50, 350);
  } else if (!isHuman && !isGood && isBitten && isFemale) {
    text("Spider-Woman!", 50, 350);
  } else if (isHuman && !isGood && isBitten && !isFemale) {
    text("Venom!", 50, 350);
  }
  else {
    text("Could not determine character, please try again.", 50, 350);
  }
}
