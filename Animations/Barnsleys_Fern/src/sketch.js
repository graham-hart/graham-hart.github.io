let x = 0;
let y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
function drawpt() {
  stroke(0, 255, 0);
  strokeWeight(3);
  //Swap 0 & width for a horizontally flipped fern
  let px = map(x, -2.182, 2.6558, 0, width);
  //Swap 0 & height for a vertically flipped fern
  let py = map(y, 0, 9.9983, height, 0);
  point(px, py);
}
function nextpt() {
  let nextX, nextY;
  let r = random(1);
  if (r < 0.01) {
    nextX = 0;
    nextY = 0.16 * y;
  } else if (r < 0.86) {
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    nextX = 0.2 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }
  // let px = map(x, -2.182, 2.6558, 0, width);
  // let py = map(y, 0, 9.9983, height, 0);
  // let p2x = map(nextX, -2.182, 2.6558, 0, width);
  // let p2y = map(nextY, 0, 9.9983, height, 0);
  // stroke(0, 255, 0, 20);
  // strokeWeight(0.5);
  // line(px, py, p2x, p2y);
  x = nextX;
  y = nextY;
}
function draw() {
  for (let i = 0; i < 200; i++) {
    drawpt();
    nextpt();
  }
}
