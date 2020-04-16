class Circle {
     constructor(x, y, s) {
          this.pos = createVector(x, y);
          this.s = s;
          this.xoff = random(500);
          this.yoff = random(500, 10500);
     }
     show() {
          push()
          stroke(255, 100);
          noFill();
          translate(this.pos.x, this.pos.y)
          ellipse(0, 0, this.s, this.s);
          pop();
     }
}