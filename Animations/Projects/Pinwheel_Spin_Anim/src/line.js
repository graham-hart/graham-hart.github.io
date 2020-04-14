class Line {
     constructor(r, a) {
          this.translation = createVector(dist, 0);
          this.rotation = r
          this.a = a || 255;
     }
     show() {
          push()
          stroke(51, this.a)
          strokeWeight(2)
          translate(width / 2, height / 2);
          rotate(this.rotation);
          translate(dist, 0)
          line(0, 0, 0, 200)
          pop()

     }
     decay() {
          this.a -= 0.75;
          if (this.a <= 0) {
               lines.splice(lines.indexOf(this), 1)
          }
     }
}