const GRAV = 1;
const DROP_COUNT = 600;
let drops = [];
function setup() {
     createCanvas(windowWidth, windowHeight);
     frameRate(60);
     for (let i = 0; i < DROP_COUNT; i++) {
          drops.push(new Drop(random(width), random(-height, -20), random(width)))
     }
}
function draw() {
     background(51, 100);
     for (let d of drops) {
          d.update();
          d.show();
     }
}