let points = [];
let w = 200;
let d = 0;
let dist = 100

let linelength = 200

let lines = [];
let change = 1;
let len = 0;
let bigger = false;

function setup() {
     createCanvas(600, 600);
     frameRate(60)
     angleMode(DEGREES)
     for (let i = 0; i < 360 / change; i++) {
          lines.push(new Line(change * i, 0.75 * i))
     }
}
function draw() {
     background(255)
     for (let l of lines) {
          l.show()
     }
     stroke(51)
     translate(width / 2, height / 2)
     // ellipse(0, 0, 5);
     rotate(d)
     translate(dist, 0);
     // ellipse(0, 0, 5)
     len += 200
     line(0, 0, 0, len)
     // ellipse(0, len, 5)
     if (len >= 100) {
          lines.push(new Line(d))
          d += change;
          len = 0;
          for (let l of lines) {
               l.decay()
          }
          // if (dist <= 100) {
          //      bigger = true;
          // }
          // if (dist >= 200) {
          //      bigger = false;
          // }
          // if (d >= 360) {
          //      if (bigger) {
          //           dist += 0.5555;
          //      } else {
          //           dist -= 0.5555;
          //      }
          // }
     }

}