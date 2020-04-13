class Firework {
  constructor(pos, vel, c) {
    this.vel = vel;
    this.pos = pos.copy();
    this.vel.setMag(random(2));
    this.color = c;
    this.color.a = 255;
  }
  show() {
    strokeWeight(3);
    stroke(this.color);
    point(this.pos.x, this.pos.y);
  }
  update() {
    this.pos.add(this.vel);
    this.vel.y += gravity * 3;
    if (this.vel.y >= 1.5) {
      if (this.vel.x > 0.5) {
        this.vel.x -= 0.07;
      }
    }
    this.color.a--;
  }
}
