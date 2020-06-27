/*Canvas Setup*/
let size = 800;
let boxCount = 30;
let gridS = size / boxCount;
/*Misc. Snake & Food vars*/
let snakeStartLength = 4;
let snake;
let food;
/*GRAPHICS*/
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
  font = loadFont("assets/fonts/fffforward.TTF");
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
function restart() {
  diedText();
  paused = true;
  noLoop();
  food = new Food();
  snake = new Snake(boxCount / 2, boxCount / 2);
  fr = startFR;
}
