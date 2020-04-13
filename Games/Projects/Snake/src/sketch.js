/*Canvas Setup*/
let size = 800;
let boxCount = 30;
let gridS = size / boxCount;
/*Misc. Snake & Food vars*/
let snakeStartLength = 4;
let snake;
let food;
/*GRAPHICS*/
let fonts = [];
let font;
let snakeColor = "#40fa1dff";
let foodColor = "#fa401dff";
//"line" or "filled"
let graphicsType = "filled";
/*Speed of Snake (framerate, 1 block/frame)*/
let fr = 10;
let startFR = fr;
/*Misc. vars*/
let paused = true;
function preload() {
  //Add more fonts here
  fonts.push(loadFont("assets/fonts/fffforward.TTF"));
  font = fonts[0];
}
function setup() {
  createCanvas(size, size);
  frameRate(fr);
  snake = new Snake(round(boxCount / 2), round(boxCount / 2));
  food = new Food();
}
function draw() {
  frameRate(fr);
  background(20);
  snake.update();
  if (snake.edges() || snake.tail()) {
    restart();
  }
  snake.show();
  food.show();
  showScore();
}
function keyPressed() {
  if (keyCode === UP_ARROW && snake) {
    if (snake.velocity.y === 0) {
      snake.velocity = createVector(0, -1);
    }
  } else if (keyCode === DOWN_ARROW) {
    if (snake.velocity.y === 0) {
      snake.velocity = createVector(0, 1);
    }
  } else if (keyCode === LEFT_ARROW) {
    if (snake.velocity.x === 0) {
      snake.velocity = createVector(-1, 0);
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (snake.velocity.x === 0) {
      snake.velocity = createVector(1, 0);
    }
  } else if (key === "g") {
    if (graphicsType === "lineArt") {
      graphicsType = "filled";
    } else {
      graphicsType = "lineArt";
    }
  } else if (keyCode === ENTER) {
    if (paused) {
      loop();
      paused = false;
    } else {
      paused = true;
      noLoop();
    }
  }
}
function mousePressed() {
  if (paused) {
    paused = false;
    loop();
  } else {
    paused = true;
    noLoop();
  }
}
function showScore() {
  push();
  textFont(font);
  textSize(32);
  fill(255);
  text(snake.segments.length - snakeStartLength, width / 2, 70);
  pop();
}
function restart() {
  diedText();
  paused = true;
  noLoop();
  food = new Food();
  snake = new Snake(boxCount / 2, boxCount / 2);
  fr = startFR;
}
function diedText() {
  push();
  textAlign(CENTER);
  fill(255);
  textSize(32);
  textFont(font);
  text("YOU DIED! PRESS ENTER TO RESTART!", width / 2, height / 2);
  pop();
}
