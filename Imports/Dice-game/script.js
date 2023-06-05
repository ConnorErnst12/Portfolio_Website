let die1, die2, die3, die4, die5, die6;
let casinoroll = 0;
let playerroll = 0;
let winMessage = ''; 

function preload() {
  die1 = loadImage("1.jpg");
  die2 = loadImage("2.jpg");
  die3 = loadImage("3.jpg");
  die4 = loadImage("4.jpg");
  die5 = loadImage("5.jpg");
  die6 = loadImage("6.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(255);
  textSize(36);
  textAlign(CENTER);
  text("Connor's Casino", width / 2, 50);
  textSize(18);
  text("Hit the c key to roll the Casino's die.", width / 2, 100);
  text("Hit the p key to roll your die (P for player).", width / 2, 130);
  text("Hit the w key to see if you are a winner.", width / 2, 160);

  textSize(24);
  text("Casino's Roll:", 250, 200);
  rect(200, 220, 100, 100);
  if (casinoroll == 1) {
    image(die1, 210, 225);
  } else if (casinoroll == 2) {
    image(die2, 210, 225);
  } else if (casinoroll == 3) {
    image(die3, 210, 225);
  } else if (casinoroll == 4) {
    image(die4, 210, 225);
  } else if (casinoroll == 5) {
    image(die5, 210, 225);
  } else if (casinoroll == 6) {
    image(die6, 210, 225);
  }

  text("Player's Roll:", 550, 200);
  rect(500, 220, 100, 100);
  if (playerroll == 1) {
    image(die1, 510, 225);
  } else if (playerroll == 2) {
    image(die2, 510, 225);
  } else if (playerroll == 3) {
    image(die3, 510, 225);
  } else if (playerroll == 4) {
    image(die4, 510, 225);
  } else if (playerroll == 5) {
    image(die5, 510, 225);
  } else if (playerroll == 6) {
    image(die6, 510, 225);
  }
  textSize(40);
  text(winMessage, width / 2, 500); 
}

function keyPressed() {
  if (key == 'c') {
    casinoroll = round(random(1, 7));
  } else if (key == 'p') {
    playerroll = round(random(1, 7));
  } else if (key == 'w') {
    if (casinoroll > playerroll) {
      winMessage = "Casino wins!";
    } else if (casinoroll < playerroll) {
      winMessage = "Player wins!";
    } else {
      winMessage = "You got a million bucks!";
    }
  }
}


//funny code go brr