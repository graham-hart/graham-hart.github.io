class Food {
  constructor() {
    this.pos = createVector(
      round(random(boxCount - 1)),
      round(random(boxCount - 1))
    );
    for (let s of snake.segments) {
      if (this.pos.equals(s)) {
        this.pos = createVector(
          round(random(boxCount - 1)),
          round(random(boxCount - 1))
        );
      } else {
        break;
      }
    }
  }
  show() {
    push();
    if (graphicsType === "filled") {
      noStroke();
      fill(foodColor);
    } else {
      noFill();
      stroke(foodColor);
    }
    rect(this.pos.x * gridS, this.pos.y * gridS, gridS, gridS);
    pop();
  }
}
