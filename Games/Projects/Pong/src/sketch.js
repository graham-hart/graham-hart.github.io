const paddleWidth = 20;
const paddleHeight = 150;

const paddleMargin = 10;

const ballSize = 30;
const aiSpeed = 15;
const ballSpeed = 9;

let ball;

let humanPaddle;
let aiPaddle;

let humanScore = 0;
let aiScore = 0;

function setup() {
     createCanvas(windowWidth + 2, windowHeight + 2);
     frameRate(60);
     humanPaddle = new Paddle(false);
     aiPaddle = new Paddle(true);
     ball = new Ball();
}
function draw() {
     background(0, 0, 0);
     humanPaddle.playerMove();
     humanPaddle.show();
     aiPaddle.aiMove();
     aiPaddle.show();
     ball.edges();
     ball.update();
     ball.checkLeftPaddle(humanPaddle);
     ball.checkRightPaddle(aiPaddle);
     ball.show();
     drawScores();
}
function drawScores() {
     textSize(32);
     fill(255);
     text(aiScore, width / 2 + 70, 100);
     text(humanScore, width / 2 - 70, 100);
}