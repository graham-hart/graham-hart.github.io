let angle;
let sizeF;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}
function draw() {
  clear();
  angle = map(mouseX, 0, width, PI / 16, PI / 2);
  sizeF = map(mouseY, 0, height, 0.75, 0.4);
  stroke(120);
  background(220);
  translate(width / 2, height);
  branch(200, 10);
}

function branch(len, sW) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (floor(len) > 4) {
    strokeWeight(sW);
    push();
    rotate(angle);
    branch(len * sizeF, sW * sizeF);
    pop();
    push();
    rotate(-angle);
    branch(len * sizeF, sW * sizeF);
    pop();
  }
}
