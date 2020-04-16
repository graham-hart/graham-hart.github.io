class Circle {
     constructor(x, y, s) {
          this.pos = createVector(x, y);
          this.s = s;
          this.strokeW = 1;
          this.fillC = null;
     }
     show() {
          push()
          stroke(255, 100);
          strokeWeight(this.strokeW)
          if (!this.fillC) {
               noFill();
          } else {
               fill(this.fillC)
          }
          translate(this.pos.x, this.pos.y)
          ellipse(0, 0, this.s, this.s);
          pop();
     }
}