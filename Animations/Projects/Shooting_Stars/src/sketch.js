let starct = 600;
let shootingstarchance = 0.05
let shootingstars = [];
let stars = []

let flickerrate = 5;

function setup() {
     createCanvas(windowWidth, windowHeight);
     frameRate(60)
     for (let i = 0; i < starct; i++) {
          stars.push(createVector(random(width), random(height)));
          stars[i].sw = random(3)
     }
}
function draw() {
     background(51, 100)
     if (random(1) < shootingstarchance) {
          shootingstars.push(new Star(random(width), random(height)))
     }
     for (let s of stars) {
          push()
          stroke(220)
          if (random(1) < 0.1) {
               strokeWeight(s.sw * 1.5)
          } else {
               strokeWeight(s.sw)
          }
          point(s.x, s.y)
          pop()
     }
     for (let s of shootingstars) {
          s.update()
          s.show();
     }
}