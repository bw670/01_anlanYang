var celld=500;
var cellx=16;
var celly=9;
var cellArray=[];
var c = 0.25;
var shapeNum;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  smooth();
  for (var i = 0; i < cellx; i++) {
    cellArray[i]=[];
    for (var j = 0; j < celly; j++) {
      cellArray[i][j] = 1;
      push();
      scale(c);
      translate(i*celld, j*celld);
      textSize(100);
      fill(0);
      text("click me", 110,500);
      drawPanda();
      drawShape(5);
      pop();
    }
  }
}

function draw() {
}

function mouseClicked() {
  var currentCellY = (int) (mouseY/(celld*c));
  var currentCellX = (int) (mouseX/(celld*c));
  scale(c);
  var newShape = (cellArray[currentCellX][currentCellY] + (int) (random(1, 6))) % 6;
  cellArray[currentCellX][currentCellY] = newShape;

  push();
  translate(currentCellX * celld, currentCellY * celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape);
  pop();

  push();
  translate(currentCellX * celld+celld, currentCellY * celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld-celld, currentCellY * celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld, currentCellY * celld+celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld, currentCellY * celld-celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld+celld, currentCellY * celld+celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld+celld, currentCellY * celld-celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld-celld, currentCellY * celld-celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();

  push();
  translate(currentCellX * celld-celld, currentCellY * celld+celld);
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 300, celld, celld);
  stroke(3);
  drawPanda();
  drawShape(newShape-1);
  pop();
}

function drawPanda() { 
  var x=300;
  var y=300;
  fill(0);
  stroke(0);
  strokeWeight(3);
  triangle(x-50, y-100, x-140, y-130, x-100, y-60);//left
  triangle(x+50, y-100, x+130, y-100, x+80, y-40);//right
  strokeWeight(3);
  //left
  bezier(x-50, y-100, x-70, y-150, x-100, y-160, x-140, y-130);
  bezier(x-140, y-130, x-180, y-90, x-100, y-20, x-100, y-60);
  //right
  bezier(x+50, y-100, x+50, y-130, x+110, y-140, x+130, y-100);
  bezier(x+130, y-100, x+150, y-60, x+100, y-30, x+80, y-40);
  //body
  bezier(x-170, y+40, x-80, y-40, x+120, y-20, x+150, y+70);
  quad(x-170, y+40, x-170, y+120, x+150, y+120, x+150, y+70);
  //face
  fill(255);
  stroke(255);
  strokeWeight(5);
  triangle(x-70, y-110, x-90, y+100, x+110, y+0); 
  stroke(0);
  strokeWeight(3);
  //red
  bezier(x-70, y-110, x+0, y-140, x+90, y-130, x+110, y+0);
  //yellow
  bezier(x-70, y-110, x-150, y-70, x-180, y+80, x-90, y+100);
  //blue
  bezier(x-90, y+100, x-30, y+120, x+130, y+120, x+110, y+0);
}


function drawShape(shapeNum) {
  switch(shapeNum) {
  case 0:
    shape0();
    break;
  case 1:
    shape1();
    break;
  case 2:
    shape2();
    break;
  case 3:
    shape3();
    break;
  case 4:
    shape4();
    break;
  case 5:
    shape5();
    break;
  }
}

function shape0() {
  var x=300;
  var y=300;
  noStroke();
  fill(212, 95, 68);
  ellipse(x-12+39, y-25, 30, 30);
  ellipse(x+12+39, y-25, 30, 30);
  ellipse(x-12-65, y-25, 30, 30);
  ellipse(x+12-65, y-25, 30, 30);
  stroke(212, 95, 68);
  triangle(x-24+39, y+5-25, x+24+39, y+5-25, x+39, y+35-25);
  triangle(x-24-65, y+5-25, x+24-65, y+5-25, x-62, y+35-25);
}

function shape1() {
  var x=300;
  var y=300;
  y=y-110;
  noStroke();
  fill(248, 231, 28);
  triangle(x, y, x-35, y, x-45, y-50);
  triangle(x, y, x+35, y, x+45, y-50);
  triangle(x+35, y, x-35, y, x, y-70);
  ellipse(x, y-70, 15, 15);
  ellipse(x-45, y-50, 12, 12);
  ellipse(x+45, y-50, 12, 12);
}
function shape2() {
  var x=300;
  var y=300;
  //left
  noStroke();
  fill(88, 57, 30);
  ellipse(x-20, y+20, 40, 40);
  bezier(x-62, y+40, x-1, y+53, x-8, y+23, x-14, y+37);
  stroke(88, 57, 30);
  strokeWeight(1);
  triangle(x-58, y+40, x-40, y+20, x-14, y+37);
  fill(255);
  bezier(x-62, y+40, x-48, y+40, x-42, y+26, x-40, y+20);
  //right
  noStroke();
  fill(88, 57, 30);
  ellipse(x+20, y+20, 40, 40);
  bezier(x+62, y+40, x+1, y+53, x+8, y+23, x+14, y+37);
  stroke(88, 57, 30);
  strokeWeight(1);
  triangle(x+58, y+40, x+40, y+20, x+14, y+37);
  fill(255);
  bezier(x+62, y+40, x+48, y+40, x+42, y+26, x+40, y+20);
}

function shape3() {
  var x=300;
  var y=300;
  noStroke();
  fill(229, 130, 137);
  ellipse(x+89, y+18, 80, 47);
  ellipse(x-120, y+18, 80, 47);
}

function shape4() {
  var x=300;
  var y=300;
  noStroke();
  rectMode(CENTER);
  fill(146, 204, 251);
  rect(x+53, y+41, 40, 110);
  rect(x-79, y+41, 40, 110);
}

function shape5() {
  var x=300;
  var y=300;
  rectMode(CENTER);
  fill(0);
  noStroke();
  rect(x-10, y-10, 60, 10);
  ellipse(x+32, y-10, 50, 50);
  ellipse(x-52, y-10, 50, 50);
}