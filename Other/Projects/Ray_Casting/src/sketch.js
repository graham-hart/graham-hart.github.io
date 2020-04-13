let caster;
let walls = [];
let wallCt = 4;
//in degrees
const RAY_ANGLE_DIFF = 0.1;

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
        random(width),
        random(height),
        random(width),
        random(height)
      )
    );
  }
  walls.push(new Wall(0, 0, width, 0));
  walls.push(new Wall(0, 0, 0, height));
  walls.push(new Wall(width, height, 0, height));
  walls.push(new Wall(width, 0, width, height));
}
function draw() {
  background(0);
  caster.update(mouseX, mouseY);
  let view = caster.cast();
  caster.show();
  for (let w of walls) {
    w.show();
  }
}

