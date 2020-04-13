let caster;
let walls = [];
let wallCt = 10;
//in degrees
const RAY_ANGLE_DIFF = 1;

const MAX_DIST = 1000;

const VIEW_ANGLE = 360;

let xoff = 0;
let yoff = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  caster = new Caster(random(width), random(height));
  for (let i = 0; i < wallCt; i++) {
    walls.push(
      new Wall(
        random(width / 2),
        random(height),
        random(width / 2),
        random(height)
      )
    );
  }
  walls.push(new Wall(0, 0, width / 2, 0));
  walls.push(new Wall(0, 0, 0, height));
  walls.push(new Wall(width / 2, height, 0, height));
  walls.push(new Wall(width / 2, height, width / 2, 0));
  walls.push(new Wall(width / 2, 0, width / 2, height));
}
function draw() {
  background(0);
  // caster.update((noise(xoff) * width) / 2, noise(yoff) * height);
  caster.update(mouseX, mouseY);
  let view = caster.cast();
  caster.show();
  for (let w of walls) {
    w.show();
  }
  push();
  const w = width / 2 / view.length;
  for (let i = 0; i < view.length; i++) {
    rectMode(CENTER);
    let b = map(view[i], 0, width / 2, 255, 0);
    let h = map(view[i], 0, width / 2, height, 0);
    fill(b);
    noStroke();
    rect(i * w + width / 2, height / 2, w, h);
  }
  pop();
  xoff += 0.0025;
  yoff += 0.0025;
}

function keyPressed() {
  if (key === "a") {
    caster.rotate(0.1);
  } else if (key === "d") {
    caster.rotate(-0.1);
  }
}
