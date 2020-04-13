let fireworks = [];
const gravity = 0.02;

let stars = [];

let mtns = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  for (let i = 0; i < 600; i++) {
    stars[i] = createVector(random(width), random(height));
  }
  for (let i = 0; i < 8; i++) {
    mtns.push(new Mountain());
  }
}
function draw() {
  background(51, 100);
  if (random(5) < 0.2) {
    fireworks.push(new Rocket(random(width)));
  }

  for (let s of stars) {
    stroke(255);
    strokeWeight(random(1, 5));
    point(s.x, s.y);
  }

  // for (let f of fireworks) {
  //   f.drawFirework();
  //   f.update();
  //   f.show();
  // }
  for (let f of fireworks) {
    f.drawFirework();
    f.update();
    f.show();
  }
  for (let m of mtns) {
    m.show();
  }
}
