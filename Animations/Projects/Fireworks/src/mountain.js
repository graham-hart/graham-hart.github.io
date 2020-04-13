class Mountain {
  constructor() {
    this.x1 = random(width);
    this.x2 = random(width);
    while (dist(this.x1, height, this.x2, height) < 200) {
      this.x2 = random(width);
    }
    this.x3 = (this.x1 + this.x2) / 2;
    this.v1 = createVector(this.x1, height);
    this.v2 = createVector(this.x2, height);
    this.v3 = createVector(this.x3, noise(this.x3, height));
  }
  show() {
    push();
    fill(0);
    noStroke();
    beginShape();
    vertex(this.v1.x, this.v1.y);
    vertex(this.v2.x, this.v2.y);
    vertex(this.v3.x, height - this.v3.y - 250);
    endShape();
    pop();
  }
}
