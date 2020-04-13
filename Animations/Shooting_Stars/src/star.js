class Star {
     constructor(x, y) {
          let angle = random(-20, 20);
          this.vel = p5.Vector.fromAngle(radians(angle));
          this.vel.setMag(random(7, 14));
          if (random(1) <= 0.5) {
               this.vel.mult(-1);
          }
          this.pos = createVector(x, y)
     }
     show() {
          stroke(255, 255, 200, 200)
          strokeWeight(2)
          line(this.pos.x, this.pos.y, this.pos.x - (this.vel.x * 5), this.pos.y - (this.vel.y * 5))
          strokeWeight(3)
          point(this.pos.x, this.pos.y);

     }
     update() {
          this.pos.add(this.vel);
     }
}