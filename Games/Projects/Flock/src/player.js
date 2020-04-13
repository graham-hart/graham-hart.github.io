class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.s = 32;
    this.speed = playerSpeed;
  }
  show() {
    ellipse(this.pos.x, this.pos.y, this.s, this.s);
  }
  update() {
    this.edges();
    this.heading = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
    this.heading.limit(this.speed);
    this.pos.add(this.heading);
  }
  edges() {
    if (this.pos.x - this.s / 2 <= boundaries.min.x) {
      this.pos.x = this.s / 2 + boundaries.min.x;
    } else if (this.pos.x + this.s / 2 >= boundaries.max.x) {
      this.pos.x = boundaries.max.x - this.s / 2;
    }
    if (this.pos.y - this.s / 2 <= boundaries.min.y) {
      this.pos.y = this.s / 2 + boundaries.min.y;
    } else if (this.pos.y + this.s / 2 >= boundaries.max.y) {
      this.pos.y = boundaries.max.y - this.s / 2;
    }
  }
}
