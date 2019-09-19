var mic;
let micLevel;
let roArms = 0;
let roEye = 0;

let change0 = ('#1301C8');
let change1 = ('#FFFF00');
let change2 = ('#FFFFFF');

let i;
let syringe = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();


  for (i = 0; i <= 30; i++) {
    syringe[i] = new Syringe(random(1, -1) * width * 0.6, random(1, 30) * height * -0.2, random(360), random(10) * 0.1);
  }
}

function draw() {
  micLevel = mic.getLevel(0.5);
  background(255, 150, 100);
  translate(width / 2, height / 2);
  Body();
  Glasses(change1);
  Eye(roEye);
  Mouth();
  Arms(roArms, change1);
  Shirt(change0);
  Hands();
  Legs();
  Shoes();
  drawGround();

  if (mouseX >= 292 & mouseX <= 510 && mouseY >= 185 && mouseY <= 615) {
    change0 = ('#000000');
    change1 = ('#CF00CF');
    change2 = ('#FFFFFF');
    drawFrank();
  } else {
    change0 = ('#1301C8');
    change1 = ('#FFFF00');
    change2 = ('#000000');
  }

  for (i = 0; i < syringe.length; i++) {
    syringe[i].display();
    syringe[i].move();
  }

  roArms = map(mic.getLevel(0.9), 0, 0.1, 377, 380);
  roEye = map(mouseX, 0, width, 281, 290);

}

function drawGround() {
  fill(100, 50, 0);
  rect(-500, 270, 800, 200, 50);
}

function drawFrank() {
  fill(255, 255, 255);
  triangle(-30, -15, -20, -30, -15, -20);
  triangle(-10, -30, -5, -20, -20, -20);
  triangle(40, -15, 30, -30, 25, -20);
  triangle(20, -30, 15, -20, 30, -20);
  noStroke();
}

function Body() {
  //pants
  fill(change0);
  strokeWeight(1);
  stroke(1);
  circle(0, 92, 232, 231);
  //body
  fill(change1);
  strokeWeight(1);
  stroke(1);
  circle(0, -100, 230);
  rect(-115.1, -110, 230, 250, 20, 20, 50, 50);
}

function Glasses() {
  //glasses
  push();
  rotate(5);
  fill(40, 40, 40);
  strokeWeight(2);
  stroke(change2);
  rect(20, -125, 92, 30, 20);
  pop();

  push();
  rotate(-5);
  fill(40, 40, 40);
  strokeWeight(2);
  stroke(change2);
  rect(-110, -125, 90, 30, 20);
  pop();

  fill(200, 200, 200);
  strokeWeight(5);
  stroke(change2);
  circle(0, -110, 100);
}

function Eye() {
  //eye
  fill(255, 255, 255);
  circle(0, -110, 70);
  noStroke();

  push();
  rotate(roEye);
  fill(139, 69, 19);
  circle(105, -34, 35, 30);
  fill(128, 0, 0);
  circle(105, -34, 20, 20);
  fill(255);
  circle(115, -47, 10, 10);
  pop();

}

function Mouth() {
  //mouth
  strokeWeight(2);
  stroke(1);
  rect(-25, -20, 55, 0);
}

function Shirt() {
  //shirt
  fill(change0);
  strokeWeight(1);
  stroke(1);
  rect(-100, 15, 200, 140, 10, 10, 20, 20);

  push();
  rotate(50);
  fill(change0);
  strokeWeight(2);
  stroke(10);
  rect(72, -92, 15, 50);
  pop();

  push();
  rotate(-50);
  fill(change0);
  strokeWeight(2);
  stroke(10);
  rect(-87, -92, 15, 50);
  pop();

  fill(0);
  circle(-89, 29, 10);
  fill(0);
  circle(89, 29, 10);

  //signature
  fill(change0);
  strokeWeight(2);
  stroke(change2);
  rect(-30, 40, 60, 40, 0, 0, 50, 50);
  line(-15, 50, 15, 50);
  line(0, 50, 0, 70);
}

function Arms() {
  //arms
  push();
  rotate(roArms);
  fill(change1);
  rect(-105, 50, 20, 100, 20);
  pop();

  push();
  rotate(-roArms);
  fill(change1);
  rect(85, 50, 20, 100, 20);
  pop();
}

function Hands() {
  //hands
  push();
  fill(40, 40, 40);
  rotate(roArms - 2);
  rect(-119, 120, 35, 20, 20);
  rect(-92, 137, 15, 30, 10);
  rect(-123, 135, 40, 40, 10, 10, 20, 20);
  pop();

  push();
  fill(40);
  rotate(-roArms + 3);
  rect(85, 129, 35, 20, 20);
  rect(79, 145, 15, 30, 10);
  rect(85, 143, 40, 40, 10, 10, 20, 20);
  pop();
}

function Legs() {
  //legs
  fill(change0);
  noStroke();
  rect(-70, 160, 30, 100, 20);

  fill(change0);
  noStroke();
  rect(40, 160, 30, 100, 20);
}

function Shoes() {
  //shoes
  fill(0);
  rect(35, 240, 60, 30, 10);
  circle(90, 255, 30);

  fill(0);
  circle(-90, 255, 30);
  rect(-96, 240, 60, 30, 10);
}
