class Rocket {
  constructor(x) {
    this.x = x;
    this.y = height;
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.acceleration = 0;
    this.velocity = random(-24, -18);
  }
  show() {
    if (!this.firework) {
      strokeWeight(9);
      stroke(this.color);
      point(this.x, this.y);
    }
  }
  update() {
    this.acceleration += gravity;
    this.velocity += this.acceleration;
    this.y += this.velocity;
    if (this.velocity > 10 && !this.firework) {
      this.burst();
      // fireworks.splice(fireworks.indexOf(this), 1);
    }
    if (this.firework) {
      let c = 0;
      for (let f of this.firework) {
        if (f.pos.y > height - 30) {
          c++;
        }
      }
      if (c === this.firework.length) {
        fireworks.splice(fireworks.indexOf(this), 1);
      }
    }
  }
  burst() {
    this.firework = [];
    for (let i = 0; i < 200; i++) {
      this.firework[i] = new Firework(
        createVector(this.x, this.y),
        p5.Vector.random2D(),
        this.color
      );
    }
  }
  drawFirework() {
    if (this.firework) {
      for (let f of this.firework) {
        f.update();
        f.show();
      }
    }
  }
}
