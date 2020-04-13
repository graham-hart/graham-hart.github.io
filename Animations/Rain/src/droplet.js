class Drop {
     constructor(x, y, z) {
          this.pos = createVector(x, y, z)
          this.vel = map(this.pos.z, 0, width, 2, 0.5);
     }
     show() {
          stroke(map(this.pos.z, 0, width, 220, 100));
          strokeWeight(map(this.pos.z, 0, width, 3, 0.3))
          line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - 5)
     }
     update() {
          this.vel += GRAV * map(this.pos.z, 0, width, GRAV, 0.2);
          this.pos.y += this.vel;
          this.edge();
     }
     edge() {
          if (this.pos.y > height) {
               this.pos.y = -20;
               this.pos.x = random(width)
               this.pos.z = random(width)
               this.vel = map(this.pos.z, 0, width, 1, 0.5);
          }
     }
}