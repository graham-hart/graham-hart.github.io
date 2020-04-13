let BORDER_WIDTH = 20;

const DEFAULT_MAIN_COLOR = "#f1f1f1";
const DEFAULT_SECOND_COLOR = "#222222";

let MAIN_COLOR = localStorage.getItem("MAIN_COLOR") || DEFAULT_MAIN_COLOR;
let SECOND_COLOR = localStorage.getItem("SECOND_COLOR") || DEFAULT_SECOND_COLOR;

let playerSpeed = 7;
let enemySpeed = 6;

let score = 0;

$("#mainColor").val(MAIN_COLOR);
$("#secondColor").val(SECOND_COLOR);

const cursorSize = 20;
let drawCrosshairs = false;

let player;
let enemies = [];
let enemyInterval = 70;

let boundaries;

let playingGame = false;


function preload() {
}

function setup() {
  $("body").css("background-color", SECOND_COLOR);
  $(".popup").css("background-color", SECOND_COLOR);
  $(".button").css("border-color", MAIN_COLOR);
  $("body").css("color", MAIN_COLOR);
  BORDER_WIDTH = windowWidth * 0.01;
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  player = new Player(width / 2, height / 2);
  boundaries = {
    min: createVector(BORDER_WIDTH, BORDER_WIDTH),
    max: createVector(width - BORDER_WIDTH, height - BORDER_WIDTH)
  };
  noCursor();
}
function draw() {
  updateSettings();
  createCanvas(windowWidth, windowHeight);
  background(SECOND_COLOR);
  drawBorders();
  player.show();
  drawCursor();
  if (playingGame) {
    if (frameCount % enemyInterval === 0) {
      enemies.push(new Enemy(random(width)));
    }
    player.update();
    updateEnemies();
  } else {
    frameCount = 0;
    showEnemies();
  }
  push();
  textSize(64);
  fill(MAIN_COLOR);
  stroke(SECOND_COLOR);
  text(score, width / 2, 150);
  pop();
}

function drawCursor() {
  push();
  translate(mouseX, mouseY);
  stroke(MAIN_COLOR);
  noFill();
  ellipse(0, 0, cursorSize, cursorSize);
  pop();
}

function updateSettings() {
  MAIN_COLOR = $("#mainColor").val();
  localStorage.setItem("MAIN_COLOR", MAIN_COLOR);
  SECOND_COLOR = $("#secondColor").val();
  localStorage.setItem("SECOND_COLOR", SECOND_COLOR);
  $("body").css("background-color", SECOND_COLOR);
  $(".popup").css("background-color", SECOND_COLOR);
  $(".popup").css("border-color", MAIN_COLOR);
  $(".button").css("border-color", MAIN_COLOR);
  $(".setting").css("border-color", MAIN_COLOR);
  $("body").css("color", MAIN_COLOR);
}

function drawBorders() {
  fill(MAIN_COLOR);
  noStroke();
  rect(0, 0, width, BORDER_WIDTH);
  rect(0, 0, BORDER_WIDTH, height);
  rect(width, height, -BORDER_WIDTH, -height);
  rect(width, height, -width, -BORDER_WIDTH);
}

function updateEnemies() {
  for (let e of enemies) {
    e.update();
    if (e.checkKillPlayer()) {
      gameOver();
    }
  }
}
function showEnemies() {
  for (let e of enemies) {
    e.show();
  }
}

function gameOver() {
  scoreText.html(`SCORE : ${score}`);
  score = 0;
  $("#gameOverUI").show();
  playingGame = false;
}
